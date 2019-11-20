const express = require("express");
const bookmarkd = express.Router();
const bookmarksSchema = require("../models/bookmarks");

//Post Route
bookmarkd.post("/", async (req, res) => {
  bookmarksSchema.create(req.body, (error, createdBookmark) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).json(createdBookmark);
    }
  });
});

//Index GET route
bookmarkd.get("/", (req, res) => {
  bookmarksSchema.find({}, (error, foundBookmark) => {
    if (error) {
      res.send(400).json({ error: error.message });
    } else {
      res.status(200).json(foundBookmark);
    }
  });
});

//DELETE ROUTE
bookmarkd.delete("/:id", (req, res) => {
  console.log("delete");
  bookmarksSchema.findByIdAndRemove(req.params.id, (error, deletedBookmark) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else [res.status(200).json(deletedBookmark)];
  });
});

//UPDATE ROUTE
bookmarkd.put("/:id", (req, res) => {
  console.log("Update Route");
  bookmarksSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBookmark) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedBookmark);
    }
  );
});

module.exports = bookmarkd;
