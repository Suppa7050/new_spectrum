const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

// Add a problem
router.post('/add', (req, res) => {
  const { Entre_id, question, detail } = req.body;

  // Create a new problem document
  const problem = new Problem({
    Entre_id,
    question,
    detail
  });

  // Save the problem to the database
  problem.save()
    .then(() => {
      res.json({ success: true, message: 'Problem added successfully' });
    })
    .catch((error) => {
      res.json({ success: false, error: error.message });
    });
});

// Get the list of all problems
router.get('/list', (req, res) => {
  Problem.find()
    .then((problems) => {
      res.json({ success: true, problems });
    })
    .catch((error) => {
      res.json({ success: false, error: error.message });
    });
});

// Get the list of problems for a specific Entre_id
router.get('/specificlist', async(req, res) => {
  const { Entre_id } = req.query;

  Problem.find({ Entre_id })
    .then((problems) => {
      res.json({ success: true, problems });
    })
    .catch((error) => {
      res.json({ success: false, error: error.message });
    });
});


// Get a specific list of problems based on question_id
router.get('/specificlist1', async (req, res) => {
  const { _id } = req.query;

  try {
    const problem = await Problem.findOne({ _id });

    if (problem) {
      res.json({ success: true, problem });
    } else {
      res.json({ success: false, message: 'Problem not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});








// module.exports = router;

/*
router.get('/problems/:id', (req, res) => {
  const { id } = req.params;

  Problem.findById(id)
    .then((problem) => {
      if (problem) {
        res.json({ success: true, problem });
      } else {
        res.json({ success: false, error: 'Problem not found' });
      }
    })
    .catch((error) => {
      res.json({ success: false, error: error.message });
    });
});
*/

module.exports = router;
