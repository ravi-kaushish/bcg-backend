const express = require("express");
const router = express.Router();

//Importing Handlers
const { Login, Signup } = require("../controllers/auth");

//Defining Routes
router.post("/login", Login);
router.post("/signup", Signup);

module.exports = router;