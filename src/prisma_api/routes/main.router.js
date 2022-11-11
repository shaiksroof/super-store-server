const router = require("express").Router()
const commonRouter = require("./common.router")

router.use("/discount", commonRouter)
router.use("/category", commonRouter)

module.exports = router
