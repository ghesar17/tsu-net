const express = require("express");

const upload = require("../multerConfig");

const {
  getCommunity,
  createCommunity,
  deleteCommunity,
  updateCommunity,
} = require("../controllers/communityController");

const router = express.Router();

router.get("/:community_name", getCommunity);

router.get("/", getCommunity);

// only user can use these operations
router.post("/", upload.single("icon"), createCommunity);

// requires the community id for following operations
router.delete("/:community_name", deleteCommunity);

router.patch("/:community_name", updateCommunity);

module.exports = router;
