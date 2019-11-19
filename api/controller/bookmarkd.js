const express = require("express");
const bookmarkd = express.Router();
const bookmarksSchema = require("../models/bookmarks");

//Index GET route
bookmarkd.get("/", (req, res) => {
  bookmarksSchema.find({}, (error, foundBookmark) => {
    if (error) {
      res.send(400).json({ error: error.message });
    } else {
      res.status(200).json();
    }
  });
  res.send("index");
});

//DELETE ROUTE
bookmarkd.delete("/:id", (req, res) => {
  console.log("");
});

//UPDATE ROUTE
bookmarkd.put("/:id", (req, res) => {
  console.log("Update Route");
});

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
