const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  role: {
    type: String,
    enum: ["owner", "manager", "supervisor", "basic"]
  }
})

module.exports = mongoose.model("User", UserSchema)
