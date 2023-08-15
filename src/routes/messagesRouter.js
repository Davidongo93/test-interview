const { Router } = require('express');
const messagesRouter = Router();

const saveMessageHandler = require('../handlers/messages/saveHandler.js');
const getMessagesHandler = require('../handlers/messages/getHandler.js');

messagesRouter.post('/', saveMessageHandler);

messagesRouter.get('/', getMessagesHandler);

module.exports = messagesRouter;
