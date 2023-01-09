const User = require("../../models/user");
const { apiResponse } = require("../../utils");
/**
 * @route         GET   /api/users/me
 * @description   get all user's details
 */

const me = async (req, res) => {
  const user = await User.findOne(req.body);

  if (!user) {
    
  }

  res.status(200).json(apiResponse(res.statusCode, "", user)) // TODO: Remove password 
}

module.exports = me;