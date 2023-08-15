const { getMessage } = require('../../controllers/messages/getController'); // Importa el controlador adecuado

const getMessageHandler = async (req, res) => {
  try {
   
    const response = await getMessage();

   

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getMessageHandler;
