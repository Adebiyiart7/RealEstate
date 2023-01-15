const jwt = require("jsonwebtoken");

// LOCAL IMPORT
const User = require("../models/user");

module.exports = async (req, res, next) => {
  let token;

  try {
    if (
      !req.headers.authorization &&
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      res.status(401);
      throw new Error("Not authorized!");
    }
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decoded._id).select(["_id", "username", "email"]);
    next();
  } catch (error) {
    console.log(error)
    res.status(400);
    throw new Error("Unauthorized!");
  }
};
