const asyncHandler = require("express-async-handler");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

// TODO: Cannot set headers after they are sent to the client

// LOCAL IMPORTS
const User = require("../../models/user");

/**
 * @route         POST /api/users/register
 * @description   Create new user
 * @access        public
 */
const register = asyncHandler(async (req, res) => {
  // validate user
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const passwordError =
    "Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.";

  const schema = Joi.object({
    email: Joi.string().required().email().label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
      .regex(passwordRegEx)
      .message(passwordError)
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ code: 400, error: error.message });
  }

  // Create a user
  const { email, password } = req.body;

  // check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({ code: 400, message: "User already exist!" });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      email: email,
      password: hash
    });

    const token = user.generateAuthToken();

    console.log(user._id);
    
    res.status(201).json({
      id: user._id,
      email: user.email,
      token: token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, error: "Error creating user" });
  }
});

module.exports = register;
