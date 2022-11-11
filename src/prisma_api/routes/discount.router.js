const router = require("express").Router()
const commonController = require("./../controllers/common.controller")
const discountController = require("./../controllers/discount.controller")

module.exports = (prisma, path) => {
  router
    .route("/")
    .post(commonController.create(prisma, path))
    .get(commonController.get(prisma, path))
  return router
}
