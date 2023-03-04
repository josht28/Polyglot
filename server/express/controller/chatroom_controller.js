const chatroom = require("../model/chatroom");
const createChatroom = async function (req, res) {
  let data = req.body;
  try {
    let result = await chatroom.create(data);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(`error while creating the chatroom:${error}`);
  }
};
const getAllChatrooms = async function (req, res) {
  try {
    const chatrooms = await chatroom.find({});
    res.status(200);
    res.send(chatrooms);
  } catch (error) {
    res.status(500);
    console.log(`error while fetching chatroom details: ${error}`);
  }
};
module.exports = { createChatroom, getAllChatrooms };
