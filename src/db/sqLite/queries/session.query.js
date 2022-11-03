module.exports = {
  table: `CREATE TABLE IF NOT EXISTS session (
              id          INTEGER  PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              total       DECIMAL  NOT NULL,
              user_id     INT      NOT NULL
                                  REFERENCES user (id),
              created_at  INT NOT NULL,
              modified_at INT NOT NULL 
          )`,
  add: `INSERT INTO session (total, user_id, created_at, modified_at)
          VALUES(?, ?, ?, ?)`,
  getAll: `SELECT * FROM session`
}
