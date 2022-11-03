const query = require("./../../../db/sqLite/queries/role.query")
module.exports = {
  add: (req, res, next) => {
    const { name, desc, feature_id } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [name, desc, new Date().getTime(), new Date().getTime(), feature_id],
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
