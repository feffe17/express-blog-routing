const express = require("express");
const router = express.Router();
const postsController = require("../controllers/dbControllers");

router.get("/", postsController.index);

router.get("/:slug", postsController.show);

module.exports = router;