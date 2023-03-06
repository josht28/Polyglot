const textToSpeech = require("@google-cloud/text-to-speech");
const fetch = require("cross-fetch");
const chatroom = require("../model/chatroom");
require("dotenv").config();
const fs = require("fs");
const util = require("util");
// connection to openAI API
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.chatGPT_key,
});
const openai = new OpenAIApi(configuration);

const decodeAudio = function (req, res) {
  try {
    console.log(req.body);
    const audioFileLink = req.body.audio;
    const chatroom = req.body.chatroom;
    // make an API call to python server with the audio to get the text extracted
    const PYTHONURL = "http://127.0.0.1:5000/audio";
    const data = { body: audioFileLink };
    console.log("sending to python");
    console.log(data);
    fetch(PYTHONURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credential: "include",
    }).then((resp) => {
      resp.json().then((result) => {
        let text = result.data;
        console.log("back from python");
        console.log(text);
        // text to speech
        const client = new textToSpeech.TextToSpeechClient();
        async function convertTexttoMp3(text) {
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
          await writeFile("output.mp3", response.audioContent, "binary");
          console.log(`Audio content has been made`);
        }
        convertTexttoMp3(text);
        res.status(200);
        res.send({ data: text });
      });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { decodeAudio };
