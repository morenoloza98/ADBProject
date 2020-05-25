const dotenv = require('dotenv');

dotenv.config();

const appConfig = {
  env: process.env.APP_ENV || 'development',
  expressPort: process.env.EXPRESS_PORT || 3000
}

module.exports = {
    MONGO_URI: 'mongodb://localhost:27017/netflix',
    REDIS_URI: 'redis://localhost:6379'
};

module.exports = appConfig;
