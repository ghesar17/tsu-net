const multer = require("multer");
const fs = require("fs");
const path = require("path");

const createUploadDirs = () => {
  const dirs = [
    path.join(__dirname, "uploads", "icons"),
    path.join(__dirname, "uploads", "posts"),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createUploadDirs();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest = "uploads/";
    if (file.fieldname === "icon") {
      dest += "icons";
    } else if (file.fieldname === "post") {
      dest += "posts";
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
