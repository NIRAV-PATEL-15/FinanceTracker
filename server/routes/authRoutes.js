const authController = require("../controller/user.controller");
const router = require('express').Router()
// Authentication Routes
router.post("/api/register", authController.register);
router.post("/api/login", authController.login);


module.exports = router

