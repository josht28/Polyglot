const textToSpeech = require("@google-cloud/text-to-speech");
const fetch = require("cross-fetch");
const chatroom = require("../model/chatroom");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
// cloudinary connection
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

// connection to openAI API
const { Configuration, OpenAIApi } = require("openai");
const { isAsyncFunction } = require("util/types");
const configuration = new Configuration({
  apiKey: process.env.chatGPT_key,
});
const openai = new OpenAIApi(configuration);

const decodeAudio = async function (req, res) {
  try {
    console.log(req.body);
    const audioFileLink = req.body.audio;
    const chatroom = req.body.chatroom;
    // make an API call to python server with the audio to get the text extracted
    const PYTHONURL = "http://127.0.0.1:5000/audio";
    const data = { body: audioFileLink };
    const whisperResponse =await fetch(PYTHONURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credential: "include",
    })
    const whisperResult = await whisperResponse.json()
    const text = await whisperResult.data;
    console.log(text);
    res.status(200);
    res.send({ data: text });
  } catch (error) {
    console.log(error);
  }
  const generateAudioResponse = async function (req, res) {
    // make an api call to open ai to generate the text response

    // convert the generated response through google cloud
    const client = new textToSpeech.TextToSpeechClient();
    const request = {
      audioConfig: {
        audioEncoding: "LINEAR16",
        pitch: 0,
        speakingRate: 1,
      },
      input: {
        text: text,
      },
      voice: {
        languageCode: "en-US",
        name: "en-US-Wavenet-J",
      },
    };
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(
      path.join(__dirname, "output.mp3"),
      response.audioContent,
      "binary"
    );
    console.log(`Audio content has been made`);
    console.log("uploading to cloudinary");
    // using cloudinary sdk
    cloudinary.uploader
      .unsigned_upload(path.join(__dirname, "/output.mp3"), "AIresponse", {
        cloud_name: "dayg41e9c",
        resource_type: "video",
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }
};
module.exports = { decodeAudio };
