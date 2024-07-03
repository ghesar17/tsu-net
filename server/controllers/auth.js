import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";

export const register = async (req, res) => {
  try {
    const {
      user_name,
      first_name,
      last_name,
      email,
      password,
      phone,
      location,
      picture_path,
      profession,
      interests,
      achievements,
      communities,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      user_name,
      first_name,
      last_name,
      email,
      password: passwordHash,
      phone,
      location,
      picture_path,
      profession,
      interests,
      achievements,
      communities,
    });
    const savedUser = await newUser.save();
    res.status(StatusCodes.CREATED).json(savedUser);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

// logging in
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
