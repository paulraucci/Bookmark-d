const express = require("express");
const bookmarkd = express.Router();

bookmarkd.get("/", (req, res) => {
  res.send("index");
});

module.exports = bookmarkd;
