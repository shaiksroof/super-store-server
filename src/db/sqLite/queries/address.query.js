module.exports = {
  table: `CREATE TABLE IF NOT EXISTS address (
              id              INTEGER       PRIMARY KEY AUTOINCREMENT
                                            UNIQUE
                                            NOT NULL,
              label       VARCHAR (255) NOT NULL,
              address_a       VARCHAR (255) NOT NULL,
              address_b       VARCHAR (255) NOT NULL,
              city            VARCHAR (255) NOT NULL,
              country         VARCHAR (255) NOT NULL,
              pincode         VARCHAR (10)  NOT NULL,
              user_id         INT           REFERENCES user (id) ON DELETE CASCADE,
              primary_address BOOLEAN       DEFAULT (false),
              shipping_address BOOLEAN       DEFAULT (false),
              created_at      INT      NOT NULL,
              modified_at     INT      NOT NULL
          )`,
  add: `INSERT INTO address (
    label,
    address_a,
    address_b,
    city,
    country,
    pincode,
    user_id,
    primary_address,
    shipping_address,
    created_at,
    modified_at)
          VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM address`,
  getUserAddress: (id) => {
    return `SELECT * FROM address WHERE user_id = ${id}`
  }
}
