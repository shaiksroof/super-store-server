const userController = require("../controllers/userController")
const userRouter = require("express").Router() //eslint-disable-line
userRouter
  .route("/")
  .post(userController.add_user)
  .get(userController.list_user)
userRouter.route("/update").post(userController.update_user)
userRouter.route("/delete").post(userController.delete_user)

module.exports = userRouter
