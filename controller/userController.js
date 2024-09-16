const User = require("../model/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    const user = new User({
      fName: req.body.fname,
      LName: req.body.lname,
      Phone: req.body.phone,
      Address: req.body.address,
      Email: req.body.email,
      Password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation,
    });
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Your new account has been successfully added.",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(403).json({
        status: "error",
        message: "Please enter your email address and Password",
      });
    }

    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(403).json({
        status: "error",
        message: "Your Email is not Correct",
      });
    }
    if (!(await bcrypt.compare(password, user?.Password))) {
      return res.status(403).json({
        status: "error",
        message: "Your password is incorrect",
      });
    }

    res.status(200).json({
      status: "success",
      message: "login successful",
      data: user,
    });
  } catch (err) {
    return res.statsu(500).json({
      status: "error",
      message: err.message,
    });
  }
};
