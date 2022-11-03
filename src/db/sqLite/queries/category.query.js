module.exports = {
  table: `CREATE TABLE IF NOT EXISTS category (
              id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                        UNIQUE
                                        NOT NULL,
              name        VARCHAR (100) NOT NULL
                                        UNIQUE,
              [desc]      TEXT          NOT NULL,
              created_at  INT           NOT NULL,                     
              modified_at INT           NOT NULL
          )`,
  add: `INSERT INTO category (name, desc, created_at, modified_at)
          VALUES(?, ?, ?, ?)`,
  getAll: `SELECT name as label, desc as value FROM category`
}
