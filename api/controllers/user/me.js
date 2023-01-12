const User = require("../../models/user");
const { apiResponse } = require("../../utils");

/**
 * @route         GET   /api/users/me
 * @description   get all user's details
 * @access        private
 */
const me = async (req, res) => {
  try {
    const user = await User.findOne(req.body.email).select(
      "-password",
      "-verificationCode"
    );

    if (!user) {
      res.status(404);
      throw new Error("User not found!");
    }
    res.status(200).json(apiResponse(res.statusCode, "", user));
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error");
  }
};

module.exports = me;
