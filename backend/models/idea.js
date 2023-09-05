const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    question_id:String,
    student_id:String,
    title: String,
    description: String,
    // detail: String,
  },
//   { timestamps: true }
);

const Idea = mongoose.model("idea", ideaSchema);

module.exports = Idea;