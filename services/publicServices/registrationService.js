const registrationModel = require("../../database/models/publicModels/registrationModel");

// Create user in DB
const serviceCreateUser = async (data) => {
  return await registrationModel.create(data);
};

// Find All users from DB
const serviceGetAllUsers = async () => {
  return await registrationModel.aggregate([
    {
      $lookup: {
        from: "regCategoryModel",
        localField: "regCategoryId",
        foreignField: "_id",
        as: "regCategory",
      }
    }
  ]);
};

// Find user from DB
const serviceGetOneUser = async (id) => {
  return await registrationModel.findById(id);
};

// Update user data from DB
const serviceUpdateUser = async (dataId, dataUpdate, dataOption) => {
  return await registrationModel.findByIdAndUpdate(dataId, dataUpdate, dataOption);
};

// Delete user from DB
const serviceDeleteUser = async (id) => {
  return await registrationModel.findByIdAndDelete(id);
};

module.exports = {
  serviceCreateUser,
  serviceGetAllUsers,
  serviceGetOneUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
