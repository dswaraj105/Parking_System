const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  number: {
    type: String,
  },
  entryTime: {
    type: Date,
    default: new Date()
  },
  exitTime: {
    type: Date,
  },
});

module.exports = mongoose.model("Log", userSchema);

