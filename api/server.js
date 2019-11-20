//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3003;

//controller
const bookmarkdController = require("./controller/bookmarkd");
//Mongoose
mongoose.connection.on("error", error =>
  console.log(error.message + "is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

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
app.use("/bookmarksSchema", bookmarkdController);

//mongoose Connection
mongoose.connect("mongodb://localhost:27017/bookmarkd", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//Port
app.listen(port, () => {
  console.log("Year:", port);
});
