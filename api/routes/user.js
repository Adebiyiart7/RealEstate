const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const register = require("../controllers/user/register");

router.get("/register", register);

module.exports = router;