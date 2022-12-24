const bcrypt = require("bcryptjs");

// LOCAL IMPORTS
const User = require("../../models/user");
const { loginSchema } = require("../../config/validation");
const { apiResponse } = require("../../utils");

/**
 * @route       POST /api/users/login
 * @desc        login user
 * @access      public
 */
const login = async (req, res) => {
  // validate input
  const schema = loginSchema;
  const { error } = schema.validate(req.body);

  // throw an error if error
  if (error) {
    res.status(400); // bad request
    throw new Error(error.message);
  }

  const { email, username, password } = req.body;

  // check if user exist and compare password
  const user = await User.findOne({ $or: [{ email }, { username }] });
  if (user && (await bcrypt.compare(password, user.password))) {
    res
      .status(200) // success
      .json(
        apiResponse(res.statusCode, "", {
          _id: user._id,
          token: user.generateAuthToken()
        })
      );
  } else {
    res.status(401); // unauthorized
    throw new Error("Invalid Credentials!");
  }
};

module.exports = login;
