const Joi = require("joi")

const productCheck = Joi.object({
  title: Joi.string().min(3).required(),

  description: Joi.string().min(3).required(),

  category: Joi.string().required(),

  url: Joi.string().required(),

  price: Joi.number().integer().required(),

  percent: Joi.number().integer().required()
})

module.exports = {
  productCheck
}
