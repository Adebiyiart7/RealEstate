const User = require("../../models/user");
const { apiResponse } = require("../../utils");

/**
 * @route         GET   /api/users/me
 * @description   get all user's details
 * @access        private
 */
const me = async (req, res) => {
  const user = await User.findOne(req.body.email).select("-password", "-verificationCode");

  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }

  console.log(user);
  res.status(200).json(apiResponse(res.statusCode, "", user))
}

module.exports = me;