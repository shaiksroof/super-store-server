require("dotenv").config()
const mongoose = require("mongoose")
// eslint-disable-next-line no-undef
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection

db.on("error", (error) => {
  console.log(error)
})

db.once("connected", () => {
  console.log("DB Connected")
})

module.exports = db
