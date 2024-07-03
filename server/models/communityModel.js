import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
  {
    community_name: {
      type: String,
      required: true,
      unique: true,
    },
    icon: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    memberIDs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    postIDs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true },
);

const Community = mongoose.model("Community", communitySchema);

export default Community;