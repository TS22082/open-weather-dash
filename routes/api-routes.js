const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../config/passport");

// Login route
// Route: http://localhost:3000/api/login
// Type: POST

router.post("/api/login", passport.authenticate("local"), (req, res) =>
  res.json({ email: req.user.email, id: req.user.id })
);

// Signup route
// Route: http://localhost:3000/api/signup
// Type: POST

router.post("/api/signup", (req, res) =>
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => res.redirect(307, "/api/login"))
    .catch((err) => res.status(401).json(err))
);

// Logout route
// Route: http://localhost:3000/logout
// Type: GET

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Set Zip route
// Route: http://localhost:3000/logout
// Type: POST

router.post("/api/zip", (req, res) => {
  !req.user
    ? res.json({})
    : db.User.update(
        { zip: req.body.zip },
        { where: { id: req.body.id } }
      ).then((dbUser) => res.send(dbUser));
});

// Get user info
// Route: http://localhost:3000/api/dashboard
// Type: GET

router.get("/api/dashboard", (req, res) => {
  !req.user
    ? res.json({})
    : res.json({
        email: req.user.email,
        userId: req.user.id,
        zip: req.user.zip,
      });
});

module.exports = router;
