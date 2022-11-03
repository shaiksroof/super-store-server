module.exports = {
  table: `CREATE TABLE IF NOT EXISTS product (
              id          INTEGER PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              name        VARCHAR NOT NULL,
              [desc]      TEXT    NOT NULL,
              sku         VARCHAR NOT NULL,
              category    VARCHAR NOT NULL,
              url         VARCHAR NOT NULL,
              price       DECIMAL NOT NULL,
              discount_id INT     CONSTRAINT prod_discount REFERENCES discount (id) 
                                  NOT NULL,
              created_at  INT     NOT NULL,
              modified_at INT     NOT NULL 
          )`,
  add: `INSERT INTO product (name, desc, sku, category, url, price, discount_id, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  getAll: `SELECT * FROM product`,
  // getAllByCategory: (category) => {
  //   return `SELECT id, name as title, desc, category, url, price, discount_id FROM product WHERE category= "${category}"`
  // }
  getAllByCategory: (category) => {
    return `SELECTSELECT id, name as title, desc, category, url, price, discount_id FROM product WHERE category= "${category}"`
  }
}
