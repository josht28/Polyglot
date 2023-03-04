const express = require('express');
const router = express.Router();
const controller = require('./controller/message_controller')
const chatroom_controller = require('./controller/chatroom_controller')
// 1)/get-messages:id
// 2)/post-message
// 3)/respond
// 5)/translate
// 6)/checkgrammar
router.post('/createnewchat', chatroom_controller.createChatroom)
router.get('/chatrooms',chatroom_controller.getAllChatrooms)
router.get('/messages/:id',controller.getChatroomMessages)
router.post('/message',controller.saveMessage)
router.post('/respond',controller.respond)
router.post('/translate',controller.translateMessage)
router.post('/grammar', controller.checkGrammar)
router.post('/translategrammar',controller.translateGrammar)
module.exports = router;