const userController = require("./controllers/sqLite/userController")
const roleController = require("./controllers/sqLite/roleController")
const addressController = require("./controllers/sqLite/addressController")
const productController = require("./controllers/sqLite/productController")
const cartItemController = require("./controllers/sqLite/cartItemController")
const categoryController = require("./controllers/sqLite/categoryController")
const discountController = require("./controllers/sqLite/discountController")
const featureController = require("./controllers/sqLite/featureController")
const orderController = require("./controllers/sqLite/orderController")
const orderItemController = require("./controllers/sqLite/orderItemController")
const paymentsController = require("./controllers/sqLite/paymentsController")
const sessionController = require("./controllers/sqLite/sessionController")

global.db = require("./../db/sqLite/conn").connect()

const router = require("express").Router()

router.route("/user").post(userController.add).get(userController.getAll)

router.route("/role").post(roleController.add).get(roleController.getAll)

router
  .route("/address")
  .post(addressController.add)
  .get(addressController.getAll)

router
  .route("/product")
  .post(productController.add)
  .get(productController.getAll)

router.route("/product/:category").get(productController.getAllByCategory)

router
  .route("/cart-item")
  .post(cartItemController.add)
  .get(cartItemController.getAll)

router
  .route("/category")
  .post(categoryController.add)
  .get(categoryController.getAll)

router
  .route("/discount")
  .post(discountController.add)
  .get(discountController.getAll)

router
  .route("/feature")
  .post(featureController.add)
  .get(featureController.getAll)

router.route("/order").post(orderController.add).get(orderController.getAll)

router
  .route("/order-item")
  .post(orderItemController.add)
  .get(orderItemController.getAll)

router
  .route("/payments")
  .post(paymentsController.add)
  .get(paymentsController.getAll)

router
  .route("/session")
  .post(sessionController.add)
  .get(sessionController.getAll)

module.exports = router
