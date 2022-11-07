const query = require("../../../db/sqLite/queries/category.query")
module.exports = {
  add: (req, res, next) => {
    const { id, label, description, icon } = req.body
    if (id) {
      db.run(
        query.setUpdate(id, label, description, icon, new Date().getTime()),
        (err, rows) => {
          if (err) return next(err)
          db.all(query.getAll, (err, rows) => {
            if (err) return next(err)
            res.status(200).send(rows)
          })
        }
      )
    } else {
      db.run(query.table, (err) => {
        if (err) return next(err)
        db.run(
          query.add,
          [
            label,
            description,
            icon,
            new Date().getTime(),
            new Date().getTime()
          ],
          (err, row) => {
            if (err) return next(err)
            db.all(query.getAll, (err, rows) => {
              if (err) return next(err)
              res.status(200).send(rows)
            })
          }
        )
      })
    }
  },
  getAll: (req, res, next) => {
    db.all(query.getAll, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  },

  setDelete: (req, res, next) => {
    db.run(query.setDelete(req.body.id), (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
