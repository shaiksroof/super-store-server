module.exports = {
  table: `CREATE TABLE IF NOT EXISTS category (
        id          INTEGER       PRIMARY KEY AUTOINCREMENT
                        UNIQUE
                        NOT NULL,
                label       VARCHAR (100) NOT NULL
                        UNIQUE,
                description TEXT          NOT NULL,
                icon        VARCHAR       DEFAULT help,
                created_at  INT           NOT NULL,
                modified_at INT           NOT NULL
          )`,
  add: `INSERT INTO category (label, description, icon, created_at, modified_at)
        VALUES(?, ?, ?, ?, ?)`,
  getAll: `SELECT id, id as value, label, description, icon FROM category`,
  setUpdate: (id, label, description, icon, modified_at) => {
    return `UPDATE category 
            SET label = "${label}", description = "${description}", icon = "${icon}", modified_at = ${modified_at} 
            WHERE id=${id}
            RETURNING *`
  },
  setDelete: (id) => {
    return `DELETE FROM category WHERE id = ${id}`
  }
}
