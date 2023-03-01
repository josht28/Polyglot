const chatroom = require('../model/chatroom')

const getChatroomMessages = function (req, res) {
  const chatroomId = req.params.id;
  res.send(chatroomId);
}
const saveMessage = function (req, res) {
  const data = req.body
  console.log(data);
  res.status = 200;
  res.send(data);

}
const respond = function (req, res) {

}
const translateMessage = function (req, res) {

}
const checkGrammar = function (req, res) {

}
module.exports = { getChatroomMessages, saveMessage, respond, translateMessage, checkGrammar };