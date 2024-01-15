require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// const {
//   communityStorage,
//   postStorage,
//   userStorage,
// } = require("./storageConfig");

// const communityUpload = multer({ storage: communityStorage });
// const postUpload = multer({ storage: postStorage });
// const userUpload = multer({ storage: userStorage });

const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");
const communitiesRouters = require("./routes/communities");

const app = express();

app.use(express.json());

app.use(cors());

// const upload = multer({ storage });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/communities", communitiesRouters);

// app.post("/");

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
