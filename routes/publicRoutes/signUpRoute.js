const express = require("express");
const router = express.Router();

const signUpController = require("../../controllers/publicController/signUpController");

// Create User API.
router.post("/createUser", signUpController.signUpCreateUser);

// Get All Users API.
router.get("/getAllUsers", signUpController.signUpGetAllUsers);

// Get One User API.
router.get("/getOneUser/:id", signUpController.signUpGetOneUser);

// Update User API.
router.put("/updateUser/:id", signUpController.signUpUpdateUser);

// Delete User API.
router.delete("/deleteUser/:id", signUpController.signUpDeleteUser);

module.exports = router;
