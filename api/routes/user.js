const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const me = require("../controllers/user/me");
const auth = require("../middleware/auth");
const update = require("../controllers/user/update");

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, me);
router.put("/update", auth, update);

module.exports = router;