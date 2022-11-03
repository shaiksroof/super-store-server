module.exports = {
  table: `CREATE TABLE IF NOT EXISTS cart_item (
              id          INTEGER  PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              session_id  DECIMAL  NOT NULL
                                  REFERENCES shopping_session (id) ON DELETE CASCADE,
              product_id  DECIMAL  NOT NULL
                                  REFERENCES user (id),
              quantity    DECIMAL  NOT NULL,
              created_at  DATETIME NOT NULL,
              modified_at DATETIME NOT NULL
          )`,
  add: `INSERT INTO cart_item (session_id, product_id, quantity, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM cart_item`
}
