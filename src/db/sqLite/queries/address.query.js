module.exports = {
  table: `CREATE TABLE IF NOT EXISTS address (
              id              INTEGER       PRIMARY KEY AUTOINCREMENT
                                            UNIQUE
                                            NOT NULL,
              address_a       VARCHAR (255) NOT NULL,
              city            VARCHAR (255) NOT NULL,
              country         VARCHAR (255) NOT NULL,
              created_at      INT      NOT NULL,
              modified_at     INT      NOT NULL,
              pincode         VARCHAR (10)  NOT NULL,
              address_b       VARCHAR (255) NOT NULL,
              user_id         INT           REFERENCES user (id) ON DELETE CASCADE,
              primary_address BOOLEAN       DEFAULT (false),
              shipping_address BOOLEAN       DEFAULT (false) 
          )`,
  add: `INSERT INTO address (address_a,
        city,
        country,
        created_at,
        modified_at,
        pincode,
        address_b,
        user_id,
        primary_address,
        shipping_address)
          VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM address`
}
