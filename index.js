const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { signUpRouter } = require("./Router/signupRouter");
const { loginRouter } = require("./Router/loginRouter");
const { noteRouter } = require("./Router/noteRouter");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/Note", noteRouter);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connect Success");
    app.listen(PORT, () => {
      console.log("listening on Port 3000");
    });
  })
  .catch((err) => console.log(err));
