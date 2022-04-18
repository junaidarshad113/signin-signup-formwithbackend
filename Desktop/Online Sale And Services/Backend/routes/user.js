const express = require("express");
const router = express.Router();

const userController = require("../controller/user");
router.post("/api/v1/new", userController.createUser);
router.post("/api/v2/signin", userController.signIn)

module.exports = router;
