const express = require("express");
const bookmarkd = express.Router();
// const Bookmarkd = Schema("../");

//Index GET route
bookmarkd.get("/", (req, res) => {
  Schema.find({}, (error, foundBookmark) => {
    if (error) {
      res.send(400).json({ error: error.message });
    } else {
      res.status(200).json();
    }
  });
  res.send("index");
});

//
//Post Route
bookmarkd.post("/", (req, res) => {
  Bookmarkd.create(req.body, (error, createdBookmark) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).send(createdBookmark);
    }
  });
});

module.exports = bookmarkd;
