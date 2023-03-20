const joi = require("joi");

const signUpSchema = joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(16).required(),
});

const signInSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(16).required(),
});

const categorySchema = joi.object().keys({
  name: joi.string().required(),
  description: joi.string(),
});

const productSchema = joi.object().keys({
  name: joi.string().required(),
  manufacturer: joi.string(),
  weight: joi.string(),
  description: joi.string(),
  price: joi.number(),
  categoryName: joi.string(),
});

const registrationSchema = joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  age: joi.number().required(),
  weight: joi.string().required(),
  gender: joi.string().required(),
  city: joi.string().required(),
  cnic: joi.string().required(),
  contact: joi.number().required(),
  regCategoryId: joi.string(),
})

const regCategorySchema = joi.object().keys({
  categoryName: joi.string().required(),
  description: joi.string(),
});


module.exports = { signUpSchema, signInSchema, categorySchema, productSchema, registrationSchema, regCategorySchema };
