const { Router } = require('express');
const router = Router();
const messagesRouter = require('./messagesRouter.js');


// Setting up routers first it must be defined and import his file
router.use('/messages', messagesRouter);
module.exports = router;