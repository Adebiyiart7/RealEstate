const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { string } = require("joi");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      min: 3,
      max: 255,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      max: 255,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 255,
      trim: true,
    },
    fullname: {
      type: String,
      min: 3,
      max: 255,
      trim: true,
    },
    dob: {
      type: String,
    },
    phone_number: {
      type: String,
      trim: true,
      max: 20,
    },
    country: {
      type: String,
      trim: true,
      max: 255,
    },
    gender: {
      type: String,
      trim: true,
      max: 20,
    },
    isActive: {
      type: Boolean,
      require: true,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      require: true,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = mongoose.model("User", userSchema);
