module.exports = {
  table: `CREATE TABLE IF NOT EXISTS discount (
              id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                        UNIQUE
                                        NOT NULL,
              name        VARCHAR (100) NOT NULL,
              [desc]      TEXT          NOT NULL,
              percent     DECIMAL (6)   NOT NULL,
              created_at  DATETIME      NOT NULL,
              modified_at DATETIME      NOT NULL
          )`,
  add: `INSERT INTO discount (name, desc, percent, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?)`,
  getAll: `SELECT percent as label, id as value FROM discount`
}
