const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Url", userSchema);
