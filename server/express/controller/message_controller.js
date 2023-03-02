const { findOneAndUpdate } = require('../model/chatroom');
const chatroom = require('../model/chatroom')
const createChatroom = function (req, res) {

}

const getChatroomMessages = async function (req, res) {
  const chatroomId = req.params.id;
  console.log(chatroomId);
  try {
    const ChatroomMessages = await chatroom.findById({ _id: chatroomId })
    res.status(200);
    res.send(ChatroomMessages);
  } catch (error) {
    console.log(error);

  }
}
const saveMessage = async function (req, res) {
  const message = req.body.messages;
  const chatroomId = req.body.chatroomId
try {
  const savedMessage = await chatroom.findByIdAndUpdate({ _id: chatroomId },
    {
      $push: { messages: message }
    },
    {returnOriginal:false}
  )
  console.log(savedMessage);
  res.status(201);
  res.send(savedMessage);
} catch (error) {
  console.log(error);

}


}
const respond = function (req, res) {

}
const translateMessage = function (req, res) {

}
const checkGrammar = function (req, res) {

}
module.exports = { getChatroomMessages, saveMessage, respond, translateMessage, checkGrammar,createChatroom };