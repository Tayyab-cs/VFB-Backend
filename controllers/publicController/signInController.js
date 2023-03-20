const bcrypt = require("bcrypt");
const services = require("../../services/publicServices/signInService");
const validation = require("../../validation/schemaValidation");

const signIncreateUser = async (req, res) => {
  try {
    // destructuring email and password from the request body.
    const { error, value } = await validation.signInSchema.validate(req.body);
    const { email, password } = value;
    console.log(email);
    console.log(password);

    if (!error) {

      const existingUser = await services.serviceCreateUser(email);
      console.log(existingUser)
      if (!existingUser) {
        return res.status(404).json({ message: "User not Found" });
      } else {
        // Comparing password.
        const comparePassword = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (comparePassword) {
          console.log(`User with email: ${email} login Successfully.`);
          res.status(201).send(existingUser);
        } else {
          return res.status(404).json({ message: "Invalid Password" });
        }
      }
    } else {
      console.log(error.message);
      res.status(400).send({ message: error.message });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Sign In Error", error: err.message });
  }
};

module.exports = { signIncreateUser };
