const express = require("express");
const router = express.Router();
let players = require("../dummydatabase");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: players
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occurred",
      err
    });
  }
});

router.get("/list/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id); // Convert id to a Number

  try {
    let player = players.find(player => player._id === id);
    res.status(200).json({
      data: player
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occurred",
      err
    });
  }
});

module.exports = router;
