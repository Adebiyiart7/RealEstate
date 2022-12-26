const bcrypt = require("bcryptjs");

// LOCAL IMPORTS
const User = require("../../models/user");
const { registerSchema } = require("../../config/validation");
const { apiResponse } = require("../../utils");

/**
 * @route         POST /api/users/register
 * @description   Create new user
 * @access        public
 */
const register = async (req, res) => {
  // validate user
  const schema = registerSchema;
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  // Create a user
  const { username, email, password } = req.body;
  
  // check if user already exist
  const userExist = await User.findOne({ $or: [{ email }, {username}] });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist!");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({
    username: username,
    email: email,
    password: hash
  });

  const token = user.generateAuthToken();

  return res.status(201).json(apiResponse(res.statusCode, "", {
    id: user._id,
    email: user.email,
    username: user.username,
    fullname: "",
    token: token,
  }));
};

module.exports = register;
