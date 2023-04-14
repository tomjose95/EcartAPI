const express = require("express");
const passport = require("passport");
const router = express.Router();

console.log("router loaded");
router.use("/api", require("./api"));
module.exports = router;
