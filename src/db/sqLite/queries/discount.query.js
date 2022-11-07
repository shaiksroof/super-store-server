module.exports = {
  table: `CREATE TABLE IF NOT EXISTS discount (
              id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                        UNIQUE
                                        NOT NULL,
              label        VARCHAR (100) NOT NULL,
              description  TEXT          NOT NULL,
              percent     DECIMAL (6)   NOT NULL,
              created_at  DATETIME      NOT NULL,
              modified_at DATETIME      NOT NULL
          )`,
  add: `INSERT INTO discount (label, description, percent, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?)`,
  getPercents: `SELECT percent as label, id as value FROM discount`,
  getLabels: `SELECT id, label, description, percent FROM discount`,
  setUpdate: (id, label, description, percent, modified_at) => {
    return `UPDATE discount SET label = "${label}", description = "${description}", percent = ${percent}, modified_at = ${modified_at} WHERE id=${id}`
  },
  setDelete: (id) => {
    return `DELETE FROM discount WHERE id = ${id}`
  }
}
