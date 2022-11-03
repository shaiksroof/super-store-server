const User = require("../db/schema/userSchema")
module.exports = {
  add_user: (req, res, next) => {
    User.create(
      {
        name: "sk",
        email: "email",
        phone: 87282,
        role: "manager"
      },
      function (err) {
        if (err) return next(err)
        res.send("User Created")
      }
    )
  },
  list_user: (req, res, next) => {
    User.find({}, function (err, result) {
      if (err) return next(err)
      res.send(result)
    })
  },
  update_user: (req, res, next) => {
    User.findByIdAndUpdate(
      req.body.id,
      { name: req.body.name },
      function (err, result) {
        if (err) return next(err)
        res.send(result)
      }
    )
  },
  delete_user: (req, res, next) => {
    User.findByIdAndDelete(req.body.id, function (err, result) {
      if (err) return next(err)
      res.send(result)
    })
  }
}
