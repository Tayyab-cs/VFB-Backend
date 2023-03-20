const signUpServices = require("../../services/publicServices/signUpService");
const signUpModel = require("../../database/models/publicModels/signUpModel");
const validation = require("../../validation/schemaValidation");

// Create User API Logic.
const signUpCreateUser = async (req, res) => {
  try {
    const { error, value } = await validation.signUpSchema.validate(req.body);
    const { firstName, lastName, email, password } = value;

    if (!error) {
      // const saltValue = 11;
      // const hashedPassword = await bcrypt.hash(password, saltValue);

      const signUpData = new signUpModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      const result = await signUpServices.serviceCreateUser(signUpData);
      console.log(`${firstName} ${lastName} has created account successfully.`);
      res.status(201).json({ message: "Sign Up Successful", result: result });
    } else {
      console.log(error.message);
      res.status(400).send({ message: error.message });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Sign Up Error", error: err });
  }
};

// Get All Users API Logic.
const signUpGetAllUsers = async (req, res) => {
  try {
    const result = await signUpServices.serviceGetAllUsers();
    res.status(201).json({ message: "users find successful", result });
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "users not found" });
  }
};

// Get One User API Logic.
const signUpGetOneUser = async (req, res) => {
  try {
    const result = await signUpServices.serviceGetOneUser(req.params.id);
    res.status(201).json({ message: "user find successful", result });
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "user not found" });
  }
};

// Update User API Logic.
const signUpUpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: true };

    const result = await signUpServices.serviceUpdateUser(
      id,
      updatedData,
      option
    );
    res.status(201).json({ message: "user updated successful", result });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "user data not updated", error: error.message });
  }
};

// Delete User API Logic.
const signUpDeleteUser = async (req, res) => {
  try {
    const result = await signUpServices.serviceDeleteUser(req.params.id);
    res.status(201).json({ message: `user has been deleted successful` });
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "user is not Deleted" });
  }
};

module.exports = {
  signUpCreateUser,
  signUpGetAllUsers,
  signUpGetOneUser,
  signUpUpdateUser,
  signUpDeleteUser,
};
