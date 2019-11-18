const require = require("express");
const app = express();
const port = 3003;

//mongoose Connection
mongoose.connect("mongodb://localhost:27017/bookmarkd", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//POrt
app.listen(port, () => {
  console.log("Year:", port);
});
