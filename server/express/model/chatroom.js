const mongoose = require('./db')
const { Schema } = mongoose;
const chatroomSchema = new Schema({
  AI_id: String,
  language: String,
  messages: [
    {
      messageId: String,
      senderId: String,
      senderName: String,
      timeStamp: String,
      text: String,
      translatedText: String
    }
  ],
});
module.exports = mongoose.model('chatrooms',chatroomSchema)