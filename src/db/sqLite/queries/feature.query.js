module.exports = {
  table: `CREATE TABLE IF NOT EXISTS feature (
              id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                        UNIQUE
                                        NOT NULL,
              name        VARCHAR (100) NOT NULL,
              [desc]      TEXT          NOT NULL,
              created_at  INT           NOT NULL,
              modified_at INT           NOT NULL
          )`,
  add: `INSERT INTO feature (name, desc, created_at, modified_at)
          VALUES(?, ?, ?, ?)`,
  getAll: `SELECT * FROM feature`
}
