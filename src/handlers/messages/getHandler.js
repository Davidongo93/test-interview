const getController  = require('../../controllers/messages/getController');

const getMessageHandler = async (req, res) => {
  try {
    const response = await getController();

   console.log("handler",response);

    res.status(200).json(response);
  } catch (error) {
    res.status(420).json({ error: error.message });
  }
};

module.exports = getMessageHandler;
