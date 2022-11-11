const httpErrors = require("http-errors")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
module.exports = {
  reqHandler: (req, res, next) => {
    const path = req?.originalUrl?.split("/")
    res.locals["TEMP_PATH"] = path[2]
    res.locals["TEMP_PRISMA"] = prisma
    next()
  },
  resHandler: (req, res) => {
    const resultToSend = res?.locals?.result
    delete res?.locals
    if (res.statusCode === 200) {
      res.send(resultToSend)
    } else {
      res.send(new httpErrors[res?.statusCode]())
    }
  }
}
