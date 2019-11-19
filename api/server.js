//Dependencies
const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");
//ADD BELOW
const bookmarksSchema = require("./models/bookmarks.js");
//ADD ABOVE

//Middleware
app.use(express.json);

//Database Connection
mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//ADD BELOW
//INDEX ROUTE

//CREATE ROUTE

//DELETE ROUTE
app.delete("/:id", (req, res) => {
  console.log("");
});

//UPDATE ROUTE
app.put("/:id", (req, res) => {
  console.log("Update Route");
});
//ADD ABOVE

app.listen(PORT, () => {
  console.log(`Connected on Port: ${PORT} 🎉`);
});
