const express = require('express');
const router = express.Router();
const controller = require('./controller/message_controller')
const chatroom_controller = require('./controller/chatroom_controller')
const audio_controller = require('./controller/audio_controller')

router.post('/createnewchat', chatroom_controller.createChatroom)
router.get('/chatrooms',chatroom_controller.getAllChatrooms)
router.get('/messages/:id',controller.getChatroomMessages)
router.post('/savemessage',controller.saveMessage)
router.post('/respond',controller.respond)
router.post('/translate',controller.translateMessage)
router.post('/grammar', controller.checkGrammar)
router.post('/translategrammar', controller.translateGrammar)
router.post('/audio', audio_controller.decodeAudio);
module.exports = router;