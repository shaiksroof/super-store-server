module.exports = {
  table: `CREATE TABLE IF NOT EXISTS order_item (
              id          INTEGER  PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              order_id    INT      NOT NULL
                                  REFERENCES order_details (id),
              product_id  INT      NOT NULL
                                  REFERENCES product (id),
              created_at  INT NOT NULL,
              modified_at INT NOT NULL
          )`,
  add: `INSERT INTO order_item (order_id, product_id, created_at, modified_at)
          VALUES(?, ?, ?, ?)`,
  getAll: `SELECT * FROM order_item`
}
