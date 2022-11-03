module.exports = {
  table: `CREATE TABLE IF NOT EXISTS user (
              id          INTEGER  PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              first_name  VARCHAR  NOT NULL,
              last_name   VARCHAR  NOT NULL,
              password    VARCHAR  NOT NULL
                                  UNIQUE,
              created_at  DATETIME NOT NULL,
              modified_at DATETIME NOT NULL,
              phone       VARCHAR  NOT NULL,
              email       VARCHAR  UNIQUE
                                  NOT NULL,
              role_id     INT      REFERENCES role (id) 
                                  NOT NULL
          )`,
  add: `INSERT INTO user ( first_name, last_name, password, created_at, modified_at, phone, email, role_id)
          VALUES( ?, ?, ?, ?, ?, ?, ?, ?)`,
  users: `SELECT first_name, last_name, email FROM user`
}
