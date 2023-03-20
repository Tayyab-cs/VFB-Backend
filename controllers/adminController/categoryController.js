const categoryModel = require("../../database/models/adminModels/categoryModel");
const validation = require("../../validation/schemaValidation");
const service = require("../../services/adminServices/categoryServices");

const categoryCreate = async (req, res) => {
  try {
    const { error, value } = validation.categorySchema.validate(req.body);
    const { name, description } = value;

    if (!error) {
      const categoryData = new categoryModel({
        name: name,
        description: description,
      });

      const result = await service.serviceCreate(categoryData);
      console.log(`${name} category is created successfully.`);
      res
        .status(201)
        .json({ message: "category created successfully.", result: result });
    } else {
      console.log(error.message);
      res.status(400).send({ message: error.message });
    }
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "Category not created.", error: err.message });
  }
};

const categoryGetAll = async (req, res) => {
  try {
    const result = await service.serviceGetAll();
    res.status(201).json({ message: "category find successfully", result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "categories not found" });
  }
};

const categoryGetOne = async (req, res) => {
  try {
    const result = await service.serviceGetOne(req.params.id);
    res.status(201).json({ message: "category find successful", result });
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "category not found" });
  }
};

const categoryGetByName = async (req, res) => {
  try {
    const result = await service.serviceGetOneByName(req.params.name);
    res.status(201).json({ message: "category find successful", result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "category not found" });
  }
};

const categoryUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: true };

    const result = await service.serviceUpdate(id, updatedData, option);
    res.status(201).json({ message: "category updated successful", result });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "category not updated", error: err.message });
  }
};

const categoryDelete = async (req, res) => {
  try {
    const result = await service.serviceDelete(req.params.id);
    res.status(201).json({ message: `category has been deleted successful` });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "category is not Deleted" });
  }
};

module.exports = {
  categoryCreate,
  categoryGetAll,
  categoryGetOne,
  categoryGetByName,
  categoryUpdate,
  categoryDelete,
};
