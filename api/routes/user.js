const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");

router.post("/register", register);
router.post("/login", login);

module.exports = router;