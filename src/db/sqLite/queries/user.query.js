module.exports = {
  table: `CREATE TABLE IF NOT EXISTS users (
                _id             INTEGER 
                                PRIMARY KEY 
                                AUTOINCREMENT
                                UNIQUE
                                NOT NULL,
                email           VARCHAR  
                                UNIQUE
                                NOT NULL,
                password        VARCHAR  
                                NOT NULL
                                UNIQUE,
                role_id         INT      
                                REFERENCES role (id),
                created_at      VARCHAR
                                NOT NULL,
                modified_at     VARCHAR 
                                NOT NULL
          )`,
  add: `INSERT INTO users ( email, password, role_id, created_at, modified_at )
          VALUES( ?, ?, ?, ?, ?)`,
  users: `SELECT * FROM users`,
  getUser: (email) => {
    return `SELECT users._id, email, password, role.label FROM users, role WHERE email = '${email}' AND users.role_id = role._id`
  }
}
