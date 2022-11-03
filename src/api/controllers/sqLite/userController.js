const query = require("./../../../db/sqLite/queries/user.query")
module.exports = {
  add: (req, res, next) => {
    const { first_name, last_name, password, phone, email, role_id } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          first_name,
          last_name,
          password,
          new Date().getTime(),
          new Date().getTime(),
          phone,
          email,
          role_id
        ],
        (err) => {
          if (err) return next(err)
          res.send("User Created")
        }
      )
    })
  },
  getAll: (req, res, next) => {
    db.all(query.users, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
