import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    community: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    picture_path: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);

export default Post;