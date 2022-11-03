require("dotenv").config()
const sqlite = require("sqlite3").verbose()
let db

module.exports = {
  connect: () => {
    if (db) {
      console.log("Already connected to the store database.")
      return db
    }
    return new sqlite.Database("./src/db/data/store.db", (err) => {
      if (err) {
        console.error(err.message)
      }
      console.log("Connected to the store database.")
    })
  },
  close: () => {
    db.close((err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log("Close the database connection.")
    })
  }
}
