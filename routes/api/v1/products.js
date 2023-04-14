const express = require("express");
const passport = require("passport");
const router = express.Router();
const productApi = require("../../../controllers/api/v1/product_api");

router.post("/create", productApi.create);
router.get("/", productApi.display);
router.delete("/:id", productApi.destroy);
router.patch("/:id/update_quantity/", productApi.update);

module.exports = router;
