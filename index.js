const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { signUpRouter, loginRouter } = require("./Router/userRouter");
const noteRouter = require("./Router/noteRouter");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/Note", noteRouter);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connect Success");
    app.listen(3000, () => {
      console.log("listening on Port 3000");
    });
  })
  .catch((err) => console.log(err));
