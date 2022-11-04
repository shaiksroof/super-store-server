module.exports = {
  table: `CREATE TABLE IF NOT EXISTS category (
        id          INTEGER       PRIMARY KEY AUTOINCREMENT
                        UNIQUE
                        NOT NULL,
                label       VARCHAR (100) NOT NULL
                        UNIQUE,
                description TEXT          NOT NULL,
                icon        VARCHAR       DEFAULT help,
                created_at  INT           NOT NULL,
                modified_at INT           NOT NULL
          )`,
  add: `INSERT INTO category (label, description, icon, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?)`,
  getAll: `SELECT label, description as value, icon FROM category`
}
