import Comment from "../models/commentModel.js";

import mongoose from "mongoose";

export const getComments = async (req, res) => {
  const { postID } = req.params;
  const comments = await Comment.find({ postID }).sort({ createdAt: -1 });

  res.status(200).json(comments);
};

// assume authorization has been given to end user for following methods
export const createComment = async (req, res) => {
  const { postID, user_name, content, likes } = req.body;

  //add doc to db
  try {
    const comment = await Comment.create({
      postID,
      user_name,
      content,
      likes,
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { commentID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentID)) {
    return res.status(404).json({ error: "Comment doesn't exist" });
  }

  const comment = await Comment.findOneAndDelete({ _id: commentID });

  if (!comment) {
    return res.status(404).json({ error: "Comment doesn't exist" });
  }

  res.status(200).json(comment);
};

export const updateComment = async (req, res) => {
  const { commentID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentID)) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  const comment = await Comment.findOneAndUpdate(
    { _id: commentID },
    {
      ...req.body,
    }
  );

  if (!comment) {
    return res.status(404).json({ error: "Comment doesn't exist" });
  }

  res.status(200).json(comment);
};
