const express = require("express");
const router = express.Router();

const registrationController = require("../../controllers/publicController/registrationController");

// Create User API.
router.post("/createUser", registrationController.registrationCreateUser);

// Get All Users API.
router.get("/getAllUsers", registrationController.registrationGetAllUsers);

// Get One User API.
router.get("/getOneUser/:id", registrationController.registrationGetOneUser);

// Update User API.
router.put("/updateUser/:id", registrationController.registrationUpdateUser);

// Delete User API.
router.delete("/deleteUser/:id", registrationController.registrationDeleteUser);

module.exports = router;
