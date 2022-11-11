/* eslint-disable no-undef */
const query = require("./../../../db/sqLite/queries/address.query")
module.exports = {
  add: (req, res, next) => {
    const {
      label,
      address_a,
      address_b,
      city,
      country,
      pincode,
      user_id,
      primary_address,
      shipping_address
    } = req.body
    db.run(query.table, (err) => {
      if (err) return next(err)
      db.run(
        query.add,
        [
          label,
          address_a,
          address_b,
          city,
          country,
          pincode,
          user_id,
          primary_address,
          shipping_address,
          new Date().getTime(),
          new Date().getTime()
        ],
        (err) => {
          if (err) return next(err)
          db.all(query.getUserAddress(Number(user_id)), (err, rows) => {
            if (err) return next(err)
            res.status(200).send(rows)
          })
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
  getUserAddress: (req, res, next) => {
    db.all(query.getUserAddress(Number(req.params.user_id)), (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
