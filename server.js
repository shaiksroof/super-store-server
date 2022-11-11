const express = require("express")
const cors = require("cors")
const path = require("path")
const serveStatic = require("serve-static")
const cluster = require("cluster")
const totalCPUs = require("os").cpus().length

// const apiRouter = require("./src/api/index")
const prismaRouter = require("./src/prisma_api/routes/main.router")
const middleware = require("./src/middleware")

global.appRoot = path.resolve(__dirname)

if (cluster.isMaster && false) {
  console.log(`Number of CPUs is ${totalCPUs}`)
  console.log(`Master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork()
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    console.log("Let's fork another worker!")
    cluster.fork()
  })
} else {
  const app = express()
  const port = process.env.PORT || 3000
  // console.log(`Worker ${process.pid} started`)
  app.use(express.static("public"))
  app.use(express.json())
  app.use(
    cors({
      origin: "*"
    })
  )

  // Route divertion
  // app.use("/api", apiRouter, errorHandler)

  //Prisma imple
  app.use("/api", middleware.reqHandler, prismaRouter, middleware.resHandler)

  app.listen(port, () => {
    console.log(`Server started @ ${port}`)
  })
}
