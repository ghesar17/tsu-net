import express from "express";

import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
