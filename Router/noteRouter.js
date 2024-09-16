const express = require("express");
const noteController = require("../controller/notesController");
const noteRouter = express.Router();

noteRouter.route("/").get(noteController.getNotes).post(noteController.addNote);
noteRouter.route("/:_id").delete(noteController.deleteNote);
module.exports = noteRouter;
