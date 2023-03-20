const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
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

const categoryModel = mongoose.model("categoryModel", categorySchema);
module.exports = categoryModel;
