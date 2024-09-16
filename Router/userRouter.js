const express = require("express");
const signUpRouter = express.Router();
const loginRouter = express.Router();
const userController = require("../controller/userController");

signUpRouter.route("/").post(userController.signUp);
loginRouter.route("/").post(userController.login);

module.exports = { signUpRouter, loginRouter };
