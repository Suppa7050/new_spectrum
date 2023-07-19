const express = require("express");
const router = express.Router();
const Idea = require("../models/idea");

// Add an idea
router.post("/add", async (req, res) => {
  const { question_id, student_id, title, description } = req.body;

  try {
    // Create a new idea document
    const idea = new Idea({
      question_id,
      student_id,
      title,
      description,
    });

    // Save the idea to the database
    await idea.save();

    res.json({ success: true, message: "Idea added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get the list of ideas
/*router.get('/list', async (req, res) => {
    try {
        // Retrieve all ideas from the database
        const ideas = await Idea.find();

        res.json({ success: true, ideas });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});*/
router.get("/list", async (req, res) => {
  const { student_id } = req.query;

  Idea.find({ student_id })
    .then((ideas) => {
      res.json({ success: true, ideas });
    })
    .catch((error) => {
      res.json({ success: false, error: error.message });
    });
});

router.get('/specificlist', async(req, res) => {
    const { question_id } = req.query;
  
    Idea.find({ question_id })
      .then((ideas) => {
        res.json({ success: true, ideas });
      })
      .catch((error) => {
        res.json({ success: false, error: error.message });
      });
  });
module.exports = router;
