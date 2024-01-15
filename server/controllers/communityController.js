const Community = require("../models/communityModel");
const User = require("../models/userModel");

const getCommunity = async (req, res) => {
  const { community_name } = req.params;

  try {
    // If a community name is provided, find that specific community
    if (community_name) {
      const community = await Community.findOne({ community_name });
      res.status(200).json(community);
    } else {
      // If no community name is provided, find 5 random communities
      const randomCommunities = await Community.aggregate([
        { $sample: { size: 5 } },
      ]);
      res.status(200).json(randomCommunities);
    }
  } catch (error) {
    // Error handling, send a server error status code
    res.status(500).json({ message: error.message });
  }
};

// assume authorization has been given to end user for following methods
const createCommunity = async (req, res) => {
  const { community_name, icon, banner, description, memberIDs, postIDs } =
    req.body;

  //add doc to db
  try {
    const community = await Community.create({
      community_name,
      icon,
      banner,
      description,
      memberIDs,
      postIDs,
    });
    res.status(200).json(community);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCommunity = async (req, res) => {
  const { community_name } = req.params;

  const community = await Community.findOneAndDelete({
    community_name: community_name,
  });

  if (!community) {
    return res.status(404).json({ error: "Community doesn't exist" });
  }

  res.status(200).json(community);
};

const updateCommunity = async (req, res) => {
  const { community_name } = req.params;

  const community = await Community.findOneAndUpdate(
    { community_name: community_name },
    {
      ...req.body,
    },
  );

  if (!community) {
    return res.status(404).json({ error: "Community doesn't exist" });
  }

  res.status(200).json(community);
};

module.exports = {
  getCommunity,
  createCommunity,
  deleteCommunity,
  updateCommunity,
};
