const query = require("./../../../db/sqLite/queries/product.query")
module.exports = {
  add: (req, res, next) => {
    const { name, desc, sku, category, url, price, discount_id } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          name,
          desc,
          sku,
          category,
          url,
          price,
          discount_id,
          new Date().getTime(),
          new Date().getTime()
        ],
        (err) => {
          if (err) {
            return next(err)
            // res.status(500).send("Error adding the Product")
          }
          res.status(200).send("Product added!")
        }
      )
    })
  },
  getAll: (req, res, next) => {
    db.all(query.getAll, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  },
  getAllByCategory: (req, res, next) => {
    const { category } = req.params
    db.all(query.getAllByCategory(category), (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
