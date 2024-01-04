const Community = require("../models/communityModel");
const User = require("../models/userModel");

const mongoose = require("mongoose");

const getCommunity = async (req, res) => {
  const { community_name } = req.params;
  const community = await Community.find({ community_name });

  res.status(200).json(community);
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
