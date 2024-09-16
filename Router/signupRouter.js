const express = require("express");
const signUpRouter = express.Router();

const userController = require("../controller/userController");

signUpRouter.route("/").post(userController.signUp);

module.exports = { signUpRouter };
