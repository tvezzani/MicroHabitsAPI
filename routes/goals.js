var express = require("express");
const Goal = require("../controllers/goal.js");
var router = express.Router();
var fs = require("fs");

// Create a new Goal
router.post("/", Goal.create);
// Retrieve all Goal
router.get("/", Goal.findAll);
// Retrieve all published Goal
router.get("/correctAnswerTrue", Goal.findAllCorrectAnswerTrue);
// Retrieve all published Goal
router.get("/:username", Goal.findAllWithUsername);
// Retrieve a single Goal with id
router.get("/:id", Goal.findOne);
// Update a Goal with id
router.put("/:id", Goal.update);
// Delete a Goal with id
router.delete("/:id", Goal.delete);
// Create a new Goal
router.delete("/", Goal.deleteAll);

module.exports = router;
