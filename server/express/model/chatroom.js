const mongoose = require('./db')
const { Schema } = mongoose;
const chatroomSchema = new Schema({
  chatroomId :String,
  AI_id: String,
  language: String,
  AI_image: String,
  AI_name: String,
  userId: String,
  user_name: String,
  nativeLanguage:String,
  messages: [
    {
      messageId: String,
      senderId: String,
      senderName: String,
      timeStamp: String,
      text: String,
      translatedText: String,
    },
  ],
});
module.exports = mongoose.model('chatrooms',chatroomSchema)