const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema(
  {
    regCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "regCategoryModel.js",
    },
    firstName: {
      require: [true, "First Name is required"],
      type: String,
    },
    lastName: {
      require: [true, "Last Name is required"],
      type: String,
    },
    age: {
      require: [true, "age is required"],
      type: Number,
    },
    weight: {
      require: [true, "weight is required"],
      type: String,
    },
    gender: {
        require: [true, "gender is required"],
        type: String,
    },
    city: {
        require: [true, "city is required"],
        type: String,
    },
    cnic: {
        require: [true, "cnic is required"],
        type: String,
    },
    contact: {
        require: [true, "contact no is required"],
        type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const registrationModel = mongoose.model("registrationModel", registrationSchema);

module.exports = registrationModel;