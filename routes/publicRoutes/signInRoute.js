const express = require("express");
const router = express.Router();
const controller = require("../../controllers/publicController/signInController");

router.post("/createUser", controller.signIncreateUser);

module.exports = router;
