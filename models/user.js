const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
    default: ""
  },
  vehicleNo: {
    type: String,
    required: true
  },
  address: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);

