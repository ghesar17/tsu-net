const express = require("express");
const multer = require("multer");

const {
  createPost,
  getPost,
  getUserPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

const upload = multer({ dest: "uploads/posts/" });

router.get("/user/:user_name", getUserPosts);

router.get("/:postID", getPost);

// only user can use these operations
router.post("/submit", upload.single("picture_path"), createPost);

// requires the post id for following operations
router.delete("/:postID", deletePost);

router.patch("/:postID", updatePost);

module.exports = router;
