const controller = {
  create: () => async (req, res, next) => {
    try {
      const { TEMP_PATH, TEMP_PRISMA } = res.locals
      const result = await TEMP_PRISMA[TEMP_PATH].create({
        data: {
          ...req.body
        }
      })
      res.locals.result = result
      next()
    } catch (err) {
      next()
    }
  },
  getById: () => async (req, res, next) => {
    try {
      const { TEMP_PATH, TEMP_PRISMA } = res.locals
      const { id } = req.params
      const result = await TEMP_PRISMA[TEMP_PATH].findUnique({
        where: {
          id: Number(id)
        }
      })
      res.locals.result = result
      next()
    } catch (err) {
      next()
    }
  },
  getAll: () => async (req, res, next) => {
    try {
      const { TEMP_PATH, TEMP_PRISMA } = res.locals
      const result = await TEMP_PRISMA[TEMP_PATH].findMany({})
      res.locals.result = result
      next()
    } catch (err) {
      next()
    }
  },
  updateById: () => async (req, res, next) => {
    try {
      const { TEMP_PATH, TEMP_PRISMA } = res.locals
      const { id, ...data } = req.body
      const result = await TEMP_PRISMA[TEMP_PATH].update({
        where: {
          id: Number(id)
        },
        data: {
          ...data
        }
      })
      res.locals.result = result
      next()
    } catch (err) {
      next()
    }
  },
  deleteById: () => async (req, res, next) => {
    try {
      const { TEMP_PATH, TEMP_PRISMA } = res.locals
      const result = await TEMP_PRISMA[TEMP_PATH].delete({
        where: {
          ...req.body
        }
      })
      res.locals.result = result
      next()
    } catch (err) {
      next()
    }
  }
}
module.exports = controller
