const registrationServices = require("../../services/publicServices/registrationService");
const registrationModel = require("../../database/models/publicModels/registrationModel");
const validation = require("../../validation/schemaValidation");
const {
  serviceGetOneByName,
} = require("../../services/publicServices/regCategoryService");

// Create User API Logic.
const registrationCreateUser = async (req, res) => {
  try {
    const { error, value } = await validation.registrationSchema.validate(
      req.body
    );
    const {
      firstName,
      lastName,
      age,
      weight,
      gender,
      city,
      cnic,
      contact,
      regCategoryName,
    } = value;

    if (!error) {
      const regCategoryId = await serviceGetOneByName(regCategoryName);

      const registrationUpData = new registrationModel({
        firstName,
        lastName,
        age,
        weight,
        gender,
        city,
        cnic,
        contact,
        regCategoryId: regCategoryId._id,
      });

      const result = await registrationServices.serviceCreateUser(
        registrationUpData
      );
      console.log(`${firstName} ${lastName} has created account successfully.`);
      res
        .status(201)
        .json({ message: "Registration Successful", result: result });
    } else {
      console.log(error.message);
      res.status(400).send({ message: error.message });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Registration Error", error: err });
  }
};

// Get All Users API Logic.
const registrationGetAllUsers = async (req, res) => {
  try {
    const result = await registrationServices.serviceGetAllUsers();
    res.status(201).json({ message: "users find successful", result });
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "users not found" });
  }
};

// Get One User API Logic.
const registrationGetOneUser = async (req, res) => {
  try {
    const result = await registrationServices.serviceGetOneUser(req.params.id);
    res.status(201).json({ message: "user find successful", result });
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "user not found" });
  }
};

// Update User API Logic.
const registrationUpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: true };

    const result = await registrationServices.serviceUpdateUser(
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
const registrationDeleteUser = async (req, res) => {
  try {
    const result = await registrationServices.serviceDeleteUser(req.params.id);
    res.status(201).json({ message: `user has been deleted successful` });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "user is not Deleted" });
  }
};

module.exports = {
  registrationCreateUser,
  registrationGetAllUsers,
  registrationGetOneUser,
  registrationUpdateUser,
  registrationDeleteUser,
};
