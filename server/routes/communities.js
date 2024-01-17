const express = require("express");
const multer = require("multer");

const {
  getCommunity,
  createCommunity,
  deleteCommunity,
  updateCommunity,
} = require("../controllers/communityController");

const router = express.Router();

const upload = multer({ dest: "uploads/community/icons/" });

router.get("/:community_name", getCommunity);

router.get("/", getCommunity);

// only user can use these operations
router.post("/", upload.single("picture_path"), createCommunity);

// requires the community id for following operations
router.delete("/:community_name", deleteCommunity);

router.patch("/:community_name", updateCommunity);

module.exports = router;
