import express from "express";

import {
  createPost,
  getPost,
  getUserPosts,
  getRandomPosts,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// const upload = multer({ dest: "uploads/posts/" });

router.get("/user/:user_name", getUserPosts);

router.get("/", getRandomPosts);

router.get("/:postID", getPost);

// only user can use these operations
// router.post("/submit", upload.single("picture_path"), createPost);

// requires the post id for following operations
router.delete("/:postID", deletePost);

router.patch("/:postID", updatePost);

export default router;
