const mongoose = require('./db')
const { Schema } = mongoose;
const chatroomSchema = new Schema({
  chatroomId :String,
  AI_id: String,
  targetLanguage: String,
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
      audio:String,
      translatedText: String,
    },
  ],
});
module.exports = mongoose.model('chatrooms',chatroomSchema)