const express = require("express");
const loginRouter = express.Router();

const userController = require("../controller/userController");

loginRouter.route("/").post(userController.login);

module.exports = { loginRouter };
