const express = require("express");
const multer = require("multer");

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
router.post("/", createCommunity);

// router.post("/post/:id/image", postUpload.single("image"), (req, res) => {
//   res.send({ message: "Post image uploaded successfully" });
// });
//
// router.post(
//   "/user/:id/profilePic",
//   userUpload.single("profilePic"),
//   (req, res) => {
//     res.send({ message: "Profile picture uploaded successfully" });
//   },
// );

// requires the community id for following operations
router.delete("/:community_name", deleteCommunity);

router.patch("/:community_name", updateCommunity);

module.exports = router;
