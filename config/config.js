const dotenv = require('dotenv');
const path = require('path');
const env = process.env.NODE_ENV;
const envPath = env === 'production'
  ? path.resolve(__dirname, '../dotenv/prod.env')
  : env === 'development'
    ? path.resolve(__dirname, '../dotenv/dev.env')
    : env === 'test'
      ? path.resolve(__dirname, '../dotenv/test.env')
      : path.resolve(__dirname, '../dotenv/.env');

dotenv.config({ path: envPath });

let config = {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_CONNECTOR: process.env.DB_CONNECTOR,
};

module.exports = config