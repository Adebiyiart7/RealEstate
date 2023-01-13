const express = require("express");
const router = express.Router();

// LOCAL IMPORTS
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const me = require("../controllers/user/me");
const auth = require("../middleware/auth");
const update = require("../controllers/user/update");
const { mailer } = require("../config/mailer");

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, me);
router.put("/update", auth, update);

// TODO: Delete this route
router.post("/mailer", (req, res) => {
  // send mailer
  try {
    const { email } = req.body;
    if (!email) {
      res.status(404);
      throw new Error("Email is required!");
    }

    const code = Math.random().toString().slice(2, 8);
    mailer(
      email,
      "Confirmation Code",
      `Your verification code is <strong>${code}.</strong>`
    );

    res.status(200).json({ code: code });
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Error sending mail");
  }
});

module.exports = router;
