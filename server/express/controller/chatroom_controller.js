const chatroom = require("../model/chatroom");
const { cloudinary } = require('../cloudinary')
const createChatroom = async function (req, res) {

  try {
     let data = req.body;
    const AI = {
      English: ["William", "Polyglot/William", `Hey`],
      French: ["Marion", "Polyglot/Marion", "Bonjour"],
      Spanish: ["Paula", "Polyglot/Paula", "Hola"],
      German: ["Karl", "Polyglot/Karl", "Hallo"],
      Portuguese: ["Rodrigo", "Polyglot/Rodrigo", "Olá"],
      Dutch: ["Kevin", "Polyglot/Kevin", "Halo"],
      Japanese: ["Hiro", "Polyglot/Hiro", "こんにちは"],
      Korean: ["Su-Ho", "Polyglot/Su-Ho", "안녕하세요"],
      Chinese: ["Hua", "Polyglot/Hua",'你好']
    };
    data.AI_name = AI[data.targetLanguage][0];
    data.AI_image = AI[data.targetLanguage][1];
    data.messages[0].senderName = AI[data.targetLanguage][0];
    data.messages[0].text = AI[data.targetLanguage][2];
    console.log(data);

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
