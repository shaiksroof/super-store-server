const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const apiRouter = require("./api/index")
const errorHandler = require("./errorHandler")
const cluster = require("cluster")
const totalCPUs = require("os").cpus().length

if (cluster.isMaster) {
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
  // console.log(`Worker ${process.pid} started`)

  app.use(express.json())
  app.use(
    cors({
      origin: "*"
    })
  )

  app.use("/api", apiRouter, errorHandler)

  app.listen(port, () => {
    console.log(`Server started @ ${port}`)
  })
}
