import Post from "../models/postModel.js";
import mongoose from "mongoose";

export const getPost = async (req, res) => {
  const { postID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postID)) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  const post = await Post.findOne({ _id: postID });

  if (!post) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  res.status(200).json(post);
};

// anyone can get all of a user's posts
export const getUserPosts = async (req, res) => {
  const { user_name } = req.params;

  const posts = await Post.find({ user_name }).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

export const getRandomPosts = async (req, res) => {
  try {
    const randomPosts = await Post.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(randomPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// assume authorization has been given to end user for following methods
export const createPost = async (req, res) => {
  const { picture_path } = req.file;

  const { user_name, title, community, content, likes } = req.body;

  let comments = req.body.comments;

  // Check if comments is an array
  if (!Array.isArray(comments)) {
    // If it's not an array, set it to an empty array
    comments = [];
  } else {
    // If it is an array, filter out any invalid comments
    comments = comments.filter((comment) =>
      mongoose.Types.ObjectId.isValid(comment)
    );
  }

  //add doc to db
  try {
    const post = await Post.create({
      user_name,
      title,
      community,
      content,
      picture_path: `/uploads/posts/${picture_path}`,
      likes,
      comments,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { postID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postID)) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  const post = await Post.findOneAndDelete({ _id: postID });

  if (!post) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  res.status(200).json(post);
};

export const updatePost = async (req, res) => {
  const { postID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postID)) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  const post = await Post.findOneAndUpdate(
    { _id: postID },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(404).json({ error: "Post doesn't exist" });
  }

  res.status(200).json(post);
};

