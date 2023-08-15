const { Message } = require('../../db.js');

const saveMessage = async (content) => {
  try {
    console.log("controller",content);
    const newMessage = await Message.create({ content }); 
    return newMessage;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = saveMessage;
