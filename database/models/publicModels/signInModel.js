const mongoose = require("mongoose");

const signInSchema = mongoose.Schema(
  {
    email: {
      required: [true, "Email is required"],
      type: String,
    },
    password: {
      required: [true, "Password is required"],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const signInModel = mongoose.model("signInModel", signInSchema);
module.exports = signInModel;
