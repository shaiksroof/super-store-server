const query = require("../../../db/sqLite/queries/discount.query")
module.exports = {
  add: (req, res, next) => {
    const { id, label, description, percent } = req.body
    if (id) {
      db.run(
        query.setUpdate(id, label, description, percent, new Date().getTime()),
        (err) => {
          if (err) return next(err)
          res.send("Discount Added!")
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
            percent,
            new Date().getTime(),
            new Date().getTime()
          ],
          (err) => {
            if (err) return next(err)
            res.send("Discount Added!")
          }
        )
      })
    }
  },
  getAll: (req, res, next) => {
    db.all(query.getLabels, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  },
  getPercents: (req, res, next) => {
    db.all(query.getPercents, (err, rows) => {
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
