const Note = require("../model/notesModel");

const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();

exports.getNotes = async (req, res) => {
  try {
    const Notes = await Note.find();

    if (!Notes) {
      return res.status(404).json({
        status: "Not Found",
        message: "you don't have any Notes",
      });
    }

    res.status(200).json({
      statsu: "success",
      result: Notes.length,
      data: Notes,
    });
  } catch (err) {
    return res.statsu(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.addNote = async (req, res) => {
  try {
    const NoteAdd = new Note({
      Title: req.body.title,
      Summary: req.body.summary,
      Day: getDay,
      Month: getMonth,
      Year: getYear,
    });
    if (!req.body) {
      return res.status(404).json({
        status: "fail",
        message: "Please enter your Notes",
      });
    }
    await NoteAdd.save();
    res.status(200).json({
      status: "success",
      data: NoteAdd,
    });
  } catch (err) {
    return res.statsu(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const id = req.params._id;
    const note = await Note.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Deleted Success",
    });
  } catch (err) {
    return res.statsu(500).json({
      status: "error",
      message: err.message,
    });
  }
};
