const express = require("express");
const router = express.Router();
const controller = require("../../controllers/adminController/categoryController");

router.post("/createCategory", controller.categoryCreate);

router.get("/getAllCategories", controller.categoryGetAll);

router.get("/getOneCategory/:id", controller.categoryGetOne);

router.get("/getByName/:name", controller.categoryGetByName);

router.put("/updateCategory/:id", controller.categoryUpdate);

router.delete("/deleteCategory/:id", controller.categoryDelete);

module.exports = router;
