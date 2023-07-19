const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // username: String,
    // password: String,
    // role: String,
    firstname: String,
    lastname: String,
    // institution: String;
    username: String,
    password: String,
    role: String,
  },
//   { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports = user;