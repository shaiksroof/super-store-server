const router = require("express").Router()
const commonController = require("./../controllers/common.controller")

router
  .route("/")
  .post(commonController.create())
  .get(commonController.getAll())
  .put(commonController.updateById())
  .delete(commonController.deleteById())
router.route("/:id").get(commonController.getById())

module.exports = router
