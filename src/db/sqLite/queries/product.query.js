module.exports = {
  table: `CREATE TABLE IF NOT EXISTS product (
              id          INTEGER PRIMARY KEY AUTOINCREMENT
                                  UNIQUE
                                  NOT NULL,
              title        VARCHAR NOT NULL,
              description      TEXT    NOT NULL,
              sku         VARCHAR NOT NULL,
              category    VARCHAR NOT NULL,
              images         VARCHAR NOT NULL,
              price       DECIMAL NOT NULL,
              discount_id INT     CONSTRAINT prod_discount REFERENCES discount (id) 
                                  NOT NULL,
              created_at  INT     NOT NULL,
              modified_at INT     NOT NULL 
          )`,
  add: `INSERT INTO product (title, description, sku, category, images, price, discount_id, created_at, modified_at)
          VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  getAll: `SELECT 
            product.id,
            product.title,
            product.description,
            product.sku,
            product.category,
            product.images,
            product.price,
            discount.percent 
            FROM product, discount
            WHERE product.discount_id = discount.id`,

  getAllByCategory: (category) => {
    return `SELECT 
              product.id,
              product.title,
              product.description,
              product.category,
              product.images,
              product.price,
              discount.percent
                  FROM product,
                      discount
                  WHERE product.category = "${category}" AND product.discount_id = discount.id`
  },
  setUpdate: (
    id,
    title,
    description,
    sku,
    category,
    images,
    price,
    discount_id,
    modified_at
  ) => {
    return `UPDATE product 
            SET 
              title = "${title}", 
              description = "${description}", 
              sku = "${sku}", 
              category = "${category}", 
              images = "${images}", 
              price = ${price}, 
              discount_id = ${discount_id}, 
              modified_at = ${modified_at} 
            WHERE id=${id}`
  },

  setDelete: (id) => {
    return `DELETE FROM product WHERE id = ${id}`
  }
}
