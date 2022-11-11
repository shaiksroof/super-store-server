const bcrypt = require("bcrypt")
const query = require("./../../../db/sqLite/queries/user.query")
const tokenService = require("./../../services/token.service")

module.exports = {
  add: (req, res, next) => {
    const { email, password } = req.body
    db.run(query.table, (err) => {
      if (err) next()
      db.get(query.getUser(email), [], async (err, row) => {
        if (err) next()
        if (row) {
          res.status(409)
          next()
        } else {
          const encryptedPassword = await bcrypt.hash(password, 10)
          db.run(
            query.add,
            [
              email,
              encryptedPassword,
              2,
              new Date().getTime(),
              new Date().getTime()
            ],
            (err) => {
              if (err) next()
              db.get(query.getUser(email), async (err, row) => {
                if (err) next()
                const token = await tokenService.generateToken(
                  row._id,
                  row.email
                )
                res
                  .status(200)
                  .send({ email: row.email, role: row.label, token })
              })
            }
          )
        }
      })
    })
  },
  getUser: (req, res, next) => {
    const { email, password } = req.body
    db.get(query.getUser(email), async (err, row) => {
      if (err) next()
      if (row && (await bcrypt.compare(password, row.password))) {
        const token = await tokenService.generateToken(row._id, row.email)
        res.status(200).send({ email: row.email, role: row.label, token })
      }
    })
  },
  getAll: (req, res, next) => {
    db.all(query.users, (err, rows) => {
      if (err) return next(err)
      res.status(200).send(rows)
    })
  }
}
