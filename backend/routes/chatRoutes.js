const express = require("express");
const  protect  = require("../../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // You can perform any additional logic here before calling accessChat()
    await accessChat();
    res.status(200).json({ message: "Access chat successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error accessing chat", error: error.message });
  }
});
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

module.exports = router;
