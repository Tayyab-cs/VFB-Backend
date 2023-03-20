const signUpModel = require("../../database/models/publicModels/signUpModel");

// Create user in DB
const serviceCreateUser = async (data) => {
  return await signUpModel.create(data);
};

// Find All users from DB
const serviceGetAllUsers = async () => {
  return await signUpModel.find();
};

// Find user from DB
const serviceGetOneUser = async (id) => {
  return await signUpModel.findById(id);
};

// Update user data from DB
const serviceUpdateUser = async (dataId, dataUpdate, dataOption) => {
  return await signUpModel.findByIdAndUpdate(dataId, dataUpdate, dataOption);
};

// Delete user from DB
const serviceDeleteUser = async (id) => {
  return await signUpModel.findByIdAndDelete(id);
};

module.exports = {
  serviceCreateUser,
  serviceGetAllUsers,
  serviceGetOneUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
