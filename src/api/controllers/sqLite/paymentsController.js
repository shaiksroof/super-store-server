const query = require("./../../../db/sqLite/queries/payments.query")
module.exports = {
  add: (req, res, next) => {
    const { order_id, amount, status, provider } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          order_id,
          amount,
          status,
          provider,
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
