const{ v4:uuidv4 } = require("uuid");

const chatroom = require("../model/chatroom");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.chatGPT_key,
});
console.log(process.env.chatGPT_key);
const openai = new OpenAIApi(configuration);

const createChatroom = async function (req, res) {
  let data = req.body;
  try {
    let result = await chatroom.create(data);
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
    console.log(savedMessage);
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
  let language = req.body.language;
  let chatroomId = req.body.chatroomId;
  console.log(AI_name);
  // slicde the last three convesations

  let context = req.body.messages.slice(-3);
  console.log(
    `${AI_name} is gen-z, and a close friend of ${user_name}. respond in ${language}\n${context[0].senderName}: ${context[0].text} \n${context[1].senderName}: ${context[1].text}\n${context[2].senderName}:${context[2].text}\n${AI_name}:`
  );

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${AI_name} is gen-z, and a close friend of ${user_name}. respond in ${language}\n${context[0].senderName}: ${context[0].text} \n${context[1].senderName}: ${context[1].text}\n${context[2].senderName}:${context[2].text}\n${AI_name}:`,
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
    console.log(savedMessage);
    res.status(201);
    res.send(savedMessage);
  } catch (error) {
    console.log(error);
  }
};

const translateMessage = function (req, res) {};
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
