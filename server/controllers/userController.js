import User from "../models/userModel.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
  // the object is empty because we want ALL users from our db
  const users = await User.find({});

  res.status(200).json(users);
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user || user.length === 0) {
    return res.status(404).json({ error: "User doesn't exist" });
  }

  res.status(200).json(user);
};

export const createUser = async (req, res) => {
  const {
    user_name,
    first_name,
    last_name,
    email,
    phone,
    location,
    picture_path,
    profession,
    interests,
    achievements,
    communities,
  } = req.body;

  //add doc to db
  try {
    const user = await User.create({
      user_name,
      first_name,
      last_name,
      email,
      phone,
      location,
      picture_path,
      profession,
      interests,
      achievements,
      communities,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { user_name } = req.params;

  const user = await User.findOneAndDelete({ user_name: user_name });

  if (!user) {
    return res.status(404).json({ error: "User doesn't exist" });
  }

  res.status(200).json(user);
};

export const updateUser = async (req, res) => {
  const { user_name } = req.params;

  const user = await User.findOneAndUpdate(
    { user_name: user_name },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "User doesn't exist" });
  }

  res.status(200).json(user);
};
