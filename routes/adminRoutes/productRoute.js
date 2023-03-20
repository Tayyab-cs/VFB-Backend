const express = require("express");
const router = express.Router();
const controller = require("../../controllers/adminController/productController");

router.post("/createProduct", controller.productCreate);

router.get("/getAllProducts", controller.productGetAll);

router.get("/getOneProduct/:id", controller.productGetOne);

router.put("/updateProduct/:id", controller.productUpdate);

router.delete("/deleteProduct/:id", controller.productDelete);

module.exports = router;
