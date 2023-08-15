const { Router } = require('express');
const messagesRouter = Router();

const saveMessageHandler = require('../handlers/messages/saveHandler.js');
const getMessagesHandler = require('../handlers/messages/getHandler.js');
const getAllMessagesHandler = require('../handlers/messages/getAllMessagesHandler.js')

messagesRouter.post('/', saveMessageHandler);

messagesRouter.get('/', getMessagesHandler);

messagesRouter.get('/all', getAllMessagesHandler);

module.exports = messagesRouter;
