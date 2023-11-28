const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res, next) => {
  let message = req.body.message + "  ";
  fs.appendFile("data.txt", message, (err) => {
    fs.readFile("data.txt", "utf-8", (err, data) => {
      res.send(data);
    });
  });
});

module.exports = router;
