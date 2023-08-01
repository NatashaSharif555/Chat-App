const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../../middleware/authMiddleware");

router.route("/").post(registerUser);

router.route("/login").post(authUser);

module.exports = router;
