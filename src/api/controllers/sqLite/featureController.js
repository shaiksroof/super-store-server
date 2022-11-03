/* eslint-disable no-undef */
const query = require("./../../../db/sqLite/queries/feature.query")
module.exports = {
  add: (req, res, next) => {
    const { name, desc } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [name, desc, new Date().getTime(), new Date().getTime()],
        (err) => {
          if (err) return next(err)
          res.send("FEATURE Created!")
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
