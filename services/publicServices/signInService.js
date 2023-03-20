const signUpModel = require("../../database/models/publicModels/signUpModel");

const serviceCreateUser = async (userData) => {
  console.log(userData);
  return await signUpModel.findOne({ email: userData });
};

module.exports = { serviceCreateUser };
