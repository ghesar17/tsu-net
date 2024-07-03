import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// note that /auth is added before all routes below
router.post("/login", login);

// app.post('/auth/register', register);
// app.patch('/auth/update/:id', update);
// app.post('/posts', authenticationMiddleware, createPost);
// app.post('/auth/login', login);
// app.post('/auth/register/otp', sendRegistrationMail);

export default router;
