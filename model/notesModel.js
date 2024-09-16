const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  Title: String,
  Summary: String,
  Day: String,
  Month: String,
  Year: String,
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
