const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoryModel",
    },
    name: {
      required: [true, "name is required."],
      type: String,
    },
    manufacturer: {
      type: String,
    },
    weight: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      required: [true, "price is required."],
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("productModel", productSchema);
module.exports = productModel;
