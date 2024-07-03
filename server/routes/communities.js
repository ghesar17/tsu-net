import express from "express";

// const upload = require("../multerConfig");

import {
  getCommunity,
  createCommunity,
  deleteCommunity,
  updateCommunity,
} from '../controllers/communityController.js';


const router = express.Router();

router.get("/:community_id", getCommunity);

router.get("/", getCommunity);

// only user can use these operations
// router.post("/", upload.single("icon"), createCommunity);

// requires the community id for following operations
router.delete("/:community_id", deleteCommunity);

router.patch("/:community_id", updateCommunity);

export default router;
