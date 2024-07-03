import express from "express";

import {
  createComment,
  getComments,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

// get all comments of a post
router.get("/:postID", getComments);

router.post("/", createComment);

// requires the comment id for following operations
router.delete("/:commentID", deleteComment);

router.patch("/:commentID", updateComment);

export default router;
