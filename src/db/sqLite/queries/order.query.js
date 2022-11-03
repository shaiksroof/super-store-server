module.exports = {
  table: `CREATE TABLE IF NOT EXISTS orders (
        id          INTEGER PRIMARY KEY AUTOINCREMENT
        UNIQUE
        NOT NULL,
user_id     INT     NOT NULL
        REFERENCES user (id),
payment_id  INT     NOT NULL
        REFERENCES payment_details (id),
amount      VARCHAR NOT NULL,
created_at  VARCHAR NOT NULL,
modified_at VARCHAR NOT NULL
        )`,
  add: `INSERT INTO orders (user_id, amount, payment_id, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM orders`
}
