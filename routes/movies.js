var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.post("/", function (req, res, next) {
    console.log(req.body);
  fs.writeFileSync("./data.json", JSON.stringify(req.body));
  res.status(201).json(req.body);
});

module.exports = router;
