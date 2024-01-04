const express = require("express");

const {
  createComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

// get all comments of a post
router.get("/:postID", getComments);

router.post("/", createComment);

// requires the comment id for following operations
router.delete("/:commentID", deleteComment);

router.patch("/:commentID", updateComment);

module.exports = router;
