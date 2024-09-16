const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
  },
  Phone: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    validate: [validator.isEmail],
    unique: true,
    required: [true, "please enter a valid email"],
  },
  Password: {
    type: String,
    required: [true, "please enter a valid password"],
  },
  passwordConfirmation: {
    type: String,
    required: [true],
    validate: {
      validator(el) {
        return el === this.Password;
      },
    },
  },
});
userSchema.pre("save", async function (next) {
  this.Password = await bcrypt.hash(this.Password, 12);
  this.passwordConfirmation = undefined;
  next();
});
const User = mongoose.model("user", userSchema);
module.exports = User;
