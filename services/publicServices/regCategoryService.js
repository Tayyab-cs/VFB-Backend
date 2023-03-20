const regCategoryModel = require("../../database/models/publicModels/regCategoryModel");

const serviceCreate = async (categoryData) => {
  return await regCategoryModel.create(categoryData);
};

const serviceGetAll = async () => {
  return await regCategoryModel.find();
};

const serviceGetOne = async (categoryId) => {
  return await regCategoryModel.findById(categoryId);
};

const serviceGetOneByName = async (name) => {
  return await regCategoryModel.findOne({ name });
};

const serviceUpdate = async (categoryId, categoryUpdatedData, option) => {
  return await regCategoryModel.findByIdAndUpdate(
    categoryId,
    categoryUpdatedData,
    option
  );
};

const serviceDelete = async (categoryId) => {
  return await regCategoryModel.findByIdAndDelete(categoryId);
};

module.exports = {
  serviceCreate,
  serviceGetAll,
  serviceGetOne,
  serviceUpdate,
  serviceDelete,
  serviceGetOneByName,
};
