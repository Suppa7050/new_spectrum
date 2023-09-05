require('dotenv').config();

let config = {
  dbUrl: process.env.DB_URL,
};

module.exports = config;
