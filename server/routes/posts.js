const express = require("express");

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

// anyone can get all a user's posts
router.get("/:user_name", getPosts);

router.get("");

// only user can use these operations
router.post("/", createPost);

// requires the post id for following operations
router.delete("/:postID", deletePost);

router.patch("/:postID", updatePost);

module.exports = router;
