const express = require('express');
const router = express.Router();
const controller = require('./controller/message_controller')
// 1)/get-messages:id
// 2)/post-message
// 3)/respond
// 5)/translate
// 6)/checkgrammar
router.post('/createNewChat',controller.createChatroom)
router.get('/messages/:id',controller.getChatroomMessages)
router.post('/message',controller.saveMessage)
router.post('/respond',controller.respond)
router.post('translate',controller.translateMessage)
router.post('grammar',controller.checkGrammar)
module.exports = router;