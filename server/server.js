import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

import postsRoutes from "../server/routes/posts.js";
import commentsRoutes from "../server/routes/comments.js";
import communitiesRouters from "../server/routes/communities.js";
import usersRoutes from "../server/routes/users.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// routes
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);
app.use("/communities", communitiesRouters);

app.use("/auth", authRoutes);

// routes with files attached
// app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

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
