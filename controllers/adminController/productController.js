const productModel = require("../../database/models/adminModels/productModel");
const validation = require("../../validation/schemaValidation");
const service = require("../../services/adminServices/productServices");
const { serviceGetOneByName,} = require("../../services/adminServices/categoryServices");

const productCreate = async (req, res) => {
  try {
    const { error, value } = validation.productSchema.validate(req.body);
    const { name, manufacturer, weight, description, price, categoryName } =
      value;

    if (!error) {
      const categoryId = await serviceGetOneByName(categoryName);
      const productData = new productModel({
        name: name,
        manufacturer: manufacturer,
        weight: weight,
        description: description,
        price: price,
        categoryId: categoryId._id,
      });
      const result = await service.servcieCreate(productData);
      console.log(`${name} product is created successfully.`);
      res
        .status(201)
        .json({ message: "product created successfully.", result: result });
    }
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "Product not created.", error: err.message });
  }
};

const productGetAll = async (req, res) => {
  try {
    const result = await service.serviceGetAll();
    res.status(201).json({ message: "product find successfully", result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "product not found" });
  }
};

const productGetOne = async (req, res) => {
  try {
    const result = await service.serviceGetOne(req.params.id);
    res.status(201).json({ message: "category find successful", result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "product not found" });
  }
};

const productUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: true };

    const result = await service.serviceUpdate(id, updatedData, option);
    res.status(201).json({ message: "product updated successful", result });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "product not updated", error: err.message });
  }
};

const productDelete = async (req, res) => {
  try {
    const result = await service.serviceDelete(req.params.id);
    res.status(201).json({ message: `product has been deleted successful` });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "product is not Deleted" });
  }
};

module.exports = {
  productCreate,
  productGetAll,
  productGetOne,
  productUpdate,
  productDelete,
};
