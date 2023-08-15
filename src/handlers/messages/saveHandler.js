const { saveMessage } = require('../../controllers/messages/saveController');//NIY
const saveMessagesHandler = async (req, res) => {
  try {

    const { content } = req.body;


    const savedMessage = await saveMessage(content);

    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = saveMessagesHandler;
