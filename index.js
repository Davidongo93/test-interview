const server = require('./src/app.js');
const { conn } = require('./src/db.js');


require('dotenv').config();
const PORT = process.env.PORT || 3001;


conn.sync({ alter: true })
  // .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`);
    });
  });