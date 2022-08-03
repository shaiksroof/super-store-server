require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
});

db.once('connected', (error) => {
  console.log('DB Connected');
});

module.exports = db;
