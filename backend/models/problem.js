const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
  {
    Entre_id: String,
    question: String,
    detail: String,
  },
//   { timestamps: true }
);

const problem = mongoose.model("problem", problemSchema);

module.exports = problem;