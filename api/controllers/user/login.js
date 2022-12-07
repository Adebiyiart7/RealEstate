const asyncHandler = require("express-async-handler");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

// LOCAL IMPORTS
const User = require("../../models/user");

/**
 * @route       POST /api/users/login
 * @desc        login user
 * @access      public
 */
const login = asyncHandler(async (req, res) => {
  // validate input
  const schema = Joi.object({
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password")
  });

  const { error } = schema.validate(req.body);

  // throw an error if error
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  const { email, password } = req.body;

  // check if user exist and compare password
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    try {
      res.status(200).json({
        _id: user._id,
        token: user.generateAuthToken()
      });
    } catch (error) {
      res.status(400);
      throw new Error("Error logging in!");
    }
  } else {
    res.status(401)
    throw new Error("Invalid Credentials!")
  }
});

module.exports = login;
