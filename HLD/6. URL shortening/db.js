const mongoose = require("mongoose");

module.exports.connect = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/tinyUrl");
};
