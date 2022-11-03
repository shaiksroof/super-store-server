const query = require("../../../db/sqLite/queries/cartItem.query")
module.exports = {
  add: (req, res, next) => {
    const { session_id, product_id, quantity } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          session_id,
          product_id,
          quantity,
          new Date().getTime(),
          new Date().getTime()
        ],
        (err) => {
          if (err) return next(err)
          res.send("Role Added!")
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
