const dotenv = require('dotenv');
dotenv.config();

const baseConfig = {
  baseURL: process.env.BASE_URL,
  token: process.env.AUTH_TOKEN,
};

const createHeaders = () => ({
  Authorization: `Bearer ${baseConfig.token}`,
  'Content-Type': 'application/json',
});

module.exports = { baseConfig, createHeaders };
