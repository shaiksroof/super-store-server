module.exports = {
  table: `CREATE TABLE IF NOT EXISTS role (
              id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                        UNIQUE
                                        NOT NULL,
              name        VARCHAR (100) NOT NULL,
              [desc]      TEXT          NOT NULL,
              created_at  INT           NOT NULL
                                        UNIQUE,
              modified_at INT           NOT NULL
                                        UNIQUE,
              feature_id  INT           REFERENCES feature (id) 
                                        NOT NULL 
          )`,
  add: `INSERT INTO role (name, desc, created_at, modified_at, feature_id)
          VALUES(?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM role`
}
