const asyncHandler = require("express-async-handler");
const Joi = require("joi");

/**
 * @route         POST /api/users/register
 * @description   Create new user
 * @access        private
 */
const register = asyncHandler(async (req, res) => {
  // validate user
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const passwordError = "Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.";

  const schema = Joi.object().schema({
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().$_match(passwordRegEx).label("Password")
  });
  
  schema.validate(req.body);

  if (schema.error) {
    res.status(400);
    throw new Error("Error")// TODO: Continue here
  }
});

module.exports = register;
