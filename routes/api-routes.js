// Configuration
const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

// Controllers
const { login, signUp, logout } = require("../controllers/auth-controller");
const { updateZip, getData } = require("../controllers/user-controller");

// Login route
// Route: http://localhost:3000/api/login
// Type: POST

router.post("/api/login", passport.authenticate("local"), login);

// Signup route
// Route: http://localhost:3000/api/signup
// Type: POST

router.post("/api/signup", signUp);

// Logout route
// Route: http://localhost:3000/logout
// Type: GET

router.get("/logout", logout);

// Update Zip route
// Route: http://localhost:3000/logout
// Type: POST

router.post("/api/zip", updateZip);

// Get user info
// Route: http://localhost:3000/api/dashboard
// Type: GET

router.get("/api/dashboard", getData);

module.exports = router;
