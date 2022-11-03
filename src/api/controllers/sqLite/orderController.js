const query = require("./../../../db/sqLite/queries/order.query")
module.exports = {
  add: (req, res, next) => {
    const { user_id, amount, payment_id } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          user_id,
          amount,
          payment_id,
          new Date().getTime(),
          new Date().getTime()
        ],
        (err) => {
          if (err) return next(err)
          res.send("Order Added!")
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
