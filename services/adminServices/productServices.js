const productModel = require("../../database/models/adminModels/productModel");

const servcieCreate = async (productData) => {
  return await productModel.create(productData);
};

const serviceGetAll = async () => {
  return await productModel.aggregate([
    {
      $lookup: {
        from: "categorymodels",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
  ]);
};

const serviceGetOne = async (productId) => {
  return await productModel.findById(productId);
};

const serviceUpdate = async (productId, productUpdatedData, option) => {
  return await productModel.findByIdAndUpdate(
    productId,
    productUpdatedData,
    option
  );
};

const serviceDelete = async (productId) => {
  return await productModel.findByIdAndDelete(productId);
};

module.exports = {
  servcieCreate,
  serviceGetAll,
  serviceGetOne,
  serviceUpdate,
  serviceDelete,
};
