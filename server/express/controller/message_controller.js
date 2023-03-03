const { v4: uuidv4 } = require("uuid");
const deepl = require("deepl-node");
const chatroom = require("../model/chatroom");
require("dotenv").config();
// connection to openAI API
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.chatGPT_key,
});
const openai = new OpenAIApi(configuration);

// connection to DeepL API for translation
const translator = new deepl.Translator(process.env.deepLAuthKey);

const createChatroom = async function (req, res) {
  let data = req.body;
  try {
    let result = await chatroom.create(data);
    console.log(result);
    res.status(201);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
const getAllChatrooms = async function (req, res) {
  try {
    const chatrooms = await chatroom.find({});
    res.status(200);
    res.send(chatrooms);
  } catch (error) {
    console.log(error);
  }
};

const getChatroomMessages = async function (req, res) {
  const chatroomId = req.params.id;
  try {
    const ChatroomMessages = await chatroom.find({ chatroomId: chatroomId });
    res.status(200);
    res.send(ChatroomMessages);
  } catch (error) {
    console.log(error);
  }
};
const saveMessage = async function (req, res) {
  const message = req.body.messages;
  const chatroomId = req.body.chatroomId;
  try {
    const savedMessage = await chatroom.findOneAndUpdate(
      { chatroomId: chatroomId },
      {
        $push: { messages: message },
      },
      { returnOriginal: false }
    );
    res.status(201);
    res.send(savedMessage);
  } catch (error) {
    console.log(error);
  }
};
const respond = async function (req, res) {
  // take the last three conversation to give context
  let AI_id = req.body.AI_id;
  let AI_name = req.body.AI_name;
  let user_name = req.body.user_name;
  let targetLanguage = req.body.targetLanguage;
  let chatroomId = req.body.chatroomId;
  console.log(AI_name);
  // slicde the last three convesations
  let previousMessages = req.body.messages;
  let context;
  let prompt = "";
  if (previousMessages.length >= 3) {
    context = req.body.messages.slice(-3);
    prompt = `${AI_name} is gen-z, and a close friend of ${user_name}. respond in ${targetLanguage}\n${context[0].senderName}: ${context[0].text} \n${context[1].senderName}: ${context[1].text}\n${context[2].senderName}:${context[2].text}\n${AI_name}:`;
  } else {
    context = previousMessages;
    prompt = `${AI_name} is gen-z, and a close friend of ${user_name}. respond in ${targetLanguage}\n${context[0].senderName}: ${context[0].text} \n${context[1].senderName}: ${context[1].text}\n${AI_name}:`;
  }

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 1,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.26,
  });
  const text = response.data.choices[0].text;
  let messageId = uuidv4();
  const data = {
    messageId: messageId,
    senderId: AI_id,
    senderName: AI_name,
    timeStamp: Date.now(),
    text: text,
    translatedText: "",
  };

  try {
    let savedMessage = await chatroom.findOneAndUpdate(
      { chatroomId: chatroomId },
      {
        $push: { messages: data },
      },
      { returnOriginal: false }
    );
    res.status(201);
    res.send(savedMessage);
  } catch (error) {
    console.log(error);
  }
};

const translateMessage = async function (req, res) {
  // data for mapping language for API call
  const translateData = {
    Czech: "cs",
    Danish: "da",
    German: "de",
    English: "en",
    Spanish: "es",
    French: "fr",
    Indonesian: "id",
    Italian: "it",
    Japanese: "ja",
    Korean: "ko",
    Norwegian: "nb",
    Dutch: "nl",
    Polish: "pl",
    Portuguese: "pt",
    Romanian: "ro",
    Russian: "ru",
    Swedish: "sv",
    Turkish: "tr",
    Ukrainian: "uk",
    Chinese: "zh",
  };
  const data = req.body;
  const chatroomId = data.chatroomId;
  const messageId = data.messageId;
  const targetLanguage = translateData[data.targetLanguage];
  const nativeLanguage = translateData[data.nativeLanguage];
  const text = data.text;
  let translationExists = false;
  
  // make API call to deepL to translate
  const translationResult = await translator.translateText(
    text,
    targetLanguage,
    nativeLanguage
  );
  // find the the chatroom to whihc the message belong to
  let chats = await chatroom.find({ chatroomId: chatroomId });

  // loop through the messages and update the translated field
  chats[0].messages.forEach((message) => {
    if (message.messageId === messageId)
      message.translatedText = translationResult.text;
  });
  // save the entire chatroom to the database
  await chats[0].save();

  console.log(translationResult.text);
  // send the updated chatroom back to the front to render
  res.status(200);
  res.send(chats[0]);
};
const checkGrammar = function (req, res) {};
module.exports = {
  getChatroomMessages,
  saveMessage,
  respond,
  translateMessage,
  checkGrammar,
  createChatroom,
  getAllChatrooms,
};
