const { getAllMessages } = require('../../controllers/messages/getAllMessagesController');

const getAllMessagesHandler = async (req, res) => {
    try {
        const messages = await getAllMessages();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllMessagesHandler;
