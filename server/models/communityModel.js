const mongoose = require("mongoose");

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

module.exports = mongoose.model("Community", communitySchema);
