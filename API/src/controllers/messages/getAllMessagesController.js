const { Message } = require('../../db');
const getAllMessages = async () => {

        const messages = await Message.findAll();
        return messages;
  
};

module.exports = {
    getAllMessages,
};
