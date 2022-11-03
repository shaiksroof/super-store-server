/* eslint-disable no-undef */
const query = require("./../../../db/sqLite/queries/address.query")
module.exports = {
  add: (req, res, next) => {
    const {
      address_a,
      city,
      country,
      pincode,
      address_b,
      user_id,
      primary_address,
      shipping_address
    } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          address_a,
          city,
          country,
          new Date().getTime(),
          new Date().getTime(),
          pincode,
          address_b,
          user_id,
          primary_address,
          shipping_address
        ],
        (err) => {
          if (err) return next(err)
          res.send("User Created")
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
