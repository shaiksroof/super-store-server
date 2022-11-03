module.exports = {
  table: `CREATE TABLE IF NOT EXISTS payments (
              id          INTEGER  PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              order_id    INT      NOT NULL
                                  REFERENCES order_details (id),
              amount      VARCHAR  NOT NULL,
              status      VARCHAR  NOT NULL,
              provider    VARCHAR  NOT NULL,
              created_at  VARCHAR NOT NULL,
              modified_at VARCHAR NOT NULL
          )`,
  add: `INSERT INTO payments (order_id, amount, status, provider, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM payments`
}
