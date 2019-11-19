const mongoose = require("mongoose");

const bookmarksSchema = mongoose.Schema({
  title: string,
  url: {
    type: String,
    required: "links must start with http/https",
    unique: true
  }
  //the links must start with http/https
});

module.exports = mongoose.model(bookmarksSchema);
