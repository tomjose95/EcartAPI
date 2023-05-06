const express = require("express");

const router = express.Router();

router.use("/products", require("./products"));
router.use("/user", require("./user"));
module.exports = router;
