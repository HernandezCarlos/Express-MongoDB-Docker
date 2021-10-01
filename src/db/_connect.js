const mongoose = require("mongoose");
const config = require('../config')

function _connect() {
  const URI = `mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`;
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      () => {
        console.log("DB connection success");
      },
      (err) => {
        console.log("DB connection error - ", err);
      }
    );
}

module.exports = _connect;
