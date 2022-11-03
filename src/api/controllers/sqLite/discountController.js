const query = require("../../../db/sqLite/queries/discount.query")
module.exports = {
  add: (req, res, next) => {
    const { name, desc, percent } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [name, desc, percent, new Date().getTime(), new Date().getTime()],
        (err) => {
          if (err) return next(err)
          res.send("Discount Added!")
        }
      )
    })
  },
  getAll: (req, res, next) => {
    db.all(query.getAll, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
