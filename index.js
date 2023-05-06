const express = require("express");
const port = 8000;
const path = require("path");
const db = require("./config/mongoose");
const passportJWT = require("./config/passport-jwt-strategy");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.log("Failed to create Port at :>> ", port);
  }
  console.log("Server is running successfully at Port:>>", port);
});
