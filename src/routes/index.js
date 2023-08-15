const { Router } = require('express');
const router = Router();
const messagesRouter = require('./messagesRouter.js');


router.use('/messages', messagesRouter);
module.exports = router;