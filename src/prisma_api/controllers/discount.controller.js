const controller = {
  add: (prisma) => async (req, res, next) => {
    const { label, description, percentage } = req.body
    try {
      const createUser = await prisma.discount.create({
        data: {
          label,
          description,
          percentage
        }
      })
      res.status(200).send(createUser)
    } catch (err) {
      await prisma.$disconnect()
    }
  },
  getAll: (prisma) => async (req, res, next) => {
    const { label, description, percentage } = req.body
    try {
      const createUser = await prisma.discount.findMany({
        data: {
          label,
          description,
          percentage
        }
      })
      res.status(200).send(createUser)
    } catch (err) {
      await prisma.$disconnect()
    }
  },
  get: (prisma) => async (req, res, next) => {
    const { id } = req.body
    try {
      const createUser = await prisma.discount.findUnique({
        where: {
          id
        },
        select: {
          label: true
        }
      })
      res.status(200).send(createUser)
    } catch (err) {
      await prisma.$disconnect()
    }
  },
  update: (prisma) => async (req, res, next) => {
    const { id, label } = req.body
    try {
      const createUser = await prisma.discount.update({
        where: {
          id
        },
        data: {
          label
        }
      })
      res.status(200).send(createUser)
    } catch (err) {
      await prisma.$disconnect()
    }
  },
  delete: (prisma) => async (req, res, next) => {
    const { id } = req.body
    try {
      const createUser = await prisma.discount.delete({
        where: {
          id
        }
      })
      res.status(200).send(createUser)
    } catch (err) {
      await prisma.$disconnect()
    }
  }
}
module.exports = controller
