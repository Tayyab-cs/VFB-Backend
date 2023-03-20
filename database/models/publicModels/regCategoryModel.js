const mongoose = require("mongoose");

const regCategorySchema = mongoose.Schema(
  {
    categoryName: {
      required: [true, "category name is required."],
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const regCategoryModel = mongoose.model("regCategoryModel", regCategorySchema);
module.exports = regCategoryModel;
