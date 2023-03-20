const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signUpSchema = mongoose.Schema(
  {
    firstName: {
      require: [true, "First Name is required"],
      type: String,
    },
    lastName: {
      require: [true, "Last Name is required"],
      type: String,
    },
    email: {
      require: [true, "Email is required"],
      type: String,
      unique: true,
    },
    password: {
      require: [true, "Password is required"],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

signUpSchema.pre("save", async function (next) {
  const saltRound = 11;
  const hashedPassword = await bcrypt.hash(this.password, saltRound);
  console.log(`PASSWORD: ${hashedPassword}`);

  this.password = hashedPassword;
  next();
});

signUpSchema.pre("findOneAndUpdate", async function (next) {
  try {
    if (this._update.password) {
      const hashedPassword = await bcrypt.hash(this._update.password, 10);
      console.log(`UPDATED HASHED PASSWORD: ${hashedPassword}`);

      this._update.password = hashedPassword;
    }
    next();
  } catch (err) {
    return next(err);
  }
});

const signUpModel = mongoose.model("signUpModel", signUpSchema);

module.exports = signUpModel;
