const axios = require('axios');
require('dotenv').config();

const getController = async (req, res) => {
  
    const apiKey = process.env.API_KEY;
    const response = await axios.get('https://api.api-ninjas.com/v1/chucknorris', {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    const joke = response.data.joke;

 return joke
};

module.exports = getController;
