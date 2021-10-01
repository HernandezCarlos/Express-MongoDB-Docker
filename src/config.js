require('dotenv').config();

module.exports = {
    PORT:  process.env.PORT,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_DB: process.env.MONGO_DB
}