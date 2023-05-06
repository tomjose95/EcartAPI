const express = require("express");
const passport = require("passport");
const router = express.Router();
const productApi = require("../../../controllers/api/v1/product_api");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  productApi.create
);
router.get("/", productApi.display);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  productApi.destroy
);
router.patch(
  "/:id/update_quantity/",
  passport.authenticate("jwt", { session: false }),
  productApi.update
);

module.exports = router;
