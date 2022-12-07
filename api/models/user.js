const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      max: 255,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 255,
      trim: true
    },
    name: {
      type: String,
      min: 3,
      max: 255,
      trim: true
    },
    nickname: {
      type: String,
      required: false,
      min: 3,
      max: 255,
      unique: true,
      trim: true
    },
    dob: {
      type: String
    },
    phone_number: {
      type: String,
      unique: true,
      trim: true,
      max: 20
    },
    gender: {
      type: String,
      trim: true,
      max: 20
    },

    isActive: {
      type: Boolean,
      require: true,
      default: false
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false
    },
    isBlocked: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._is }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });
};

module.exports = mongoose.model("User", userSchema);
