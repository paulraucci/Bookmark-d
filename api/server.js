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
mongoose.connect("mongodb://localhost:27017/holidays");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3003;

//Mongoose
mongoose.connection.on("error", error =>
  console.log(error.message + "is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//controller
const bookmarkdController = require("./controller/bookmarkd");

//middleware
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(express.json());
app.use(cors(corsOptions));
//
// app.use("/Schema", bookmarkdController);
//
//mongoose Connection
mongoose.connect("mongodb://localhost:27017/bookmarkd", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//ADD BELOW

//DELETE ROUTE
app.delete("/:id", (req, res) => {
  console.log("");
});

//UPDATE ROUTE
app.put("/:id", (req, res) => {
  console.log("Update Route");
});
//ADD ABOVE

//Port
app.listen(port, () => {
  console.log("Year:", port);
});
