const categoryModel = require("../../database/models/adminModels/categoryModel");

const serviceCreate = async (categoryData) => {
  return await categoryModel.create(categoryData);
};

const serviceGetAll = async () => {
  return await categoryModel.find();
};

const serviceGetOne = async (categoryId) => {
  return await categoryModel.findById(categoryId);
};

const serviceGetOneByName = async (name) => {
  return await categoryModel.findOne({ name });
};

const serviceUpdate = async (categoryId, categoryUpdatedData, option) => {
  return await categoryModel.findByIdAndUpdate(
    categoryId,
    categoryUpdatedData,
    option
  );
};

const serviceDelete = async (categoryId) => {
  return await categoryModel.findByIdAndDelete(categoryId);
};

module.exports = {
  serviceCreate,
  serviceGetAll,
  serviceGetOne,
  serviceUpdate,
  serviceDelete,
  serviceGetOneByName,
};
