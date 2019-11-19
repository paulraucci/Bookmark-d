const mongoose = require("mongoose");

const bookmarksSchema = mongoose.Schema({
  title: String,
  url: {
    type: String,
    required: "links must start with http/https",
    unique: true
  }
});

module.exports = mongoose.model("Bookmarkd", bookmarksSchema);
