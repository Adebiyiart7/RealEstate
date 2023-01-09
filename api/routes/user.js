const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const me = require("../controllers/user/me");

router.post("/register", register);
router.post("/login", login);
router.get("/me", me)

module.exports = router;