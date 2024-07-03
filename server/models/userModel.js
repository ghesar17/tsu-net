import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 50,
    },
    first_name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    last_name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    picture_path: {
      type: String,
      default: "",
    },
    profession: {
      type: String,
      required: true,
    },
    interests: {
      type: [String],
    },
    achievements: {
      type: [String],
      required: true,
    },
    communities: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;