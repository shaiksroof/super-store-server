--
-- File generated with SQLiteStudio v3.3.3 on Tue Nov 1 22:39:41 2022
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: address
CREATE TABLE address (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, address_a VARCHAR (255) NOT NULL, city VARCHAR (255) NOT NULL, country VARCHAR (255) NOT NULL, created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL, pincode VARCHAR (10) NOT NULL, address_b VARCHAR (255) NOT NULL, user_id INT REFERENCES user (id) ON DELETE CASCADE, primary_address BOOLEAN DEFAULT (false));
INSERT INTO address (id, address_a, city, country, created_at, modified_at, pincode, address_b, user_id, primary_address) VALUES (1, 'lkj', 'lkj', 'lkj', 'lkjhkjh', 'lkj', 'lk', 'lk', NULL, 0);

-- Table: cart_item
CREATE TABLE cart_item (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, session_id DECIMAL NOT NULL REFERENCES shopping_session (id) ON DELETE CASCADE, product_id DECIMAL NOT NULL REFERENCES user (id), created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL, quantity DECIMAL NOT NULL);

-- Table: category
CREATE TABLE category (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, name VARCHAR (100) NOT NULL, "desc" TEXT NOT NULL, modified_at INT NOT NULL UNIQUE, created_at INT UNIQUE NOT NULL);

-- Table: discount
CREATE TABLE discount (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, name VARCHAR (100) NOT NULL, "desc" TEXT NOT NULL, percent DECIMAL (6) NOT NULL, created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL);

-- Table: feature
CREATE TABLE feature (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, name VARCHAR (100) NOT NULL, "desc" TEXT NOT NULL, modified_at INT NOT NULL UNIQUE, created_at INT UNIQUE NOT NULL);
INSERT INTO feature (id, name, "desc", modified_at, created_at) VALUES (1, 'cart', 'for card feature', 112121, 121212);

-- Table: order_details
CREATE TABLE order_details (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, user_id INT NOT NULL REFERENCES user (id), amount VARCHAR NOT NULL, created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL, payment_id INT NOT NULL REFERENCES payment_details (id));

-- Table: order_item
CREATE TABLE order_item (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, order_id INT NOT NULL REFERENCES order_details (id), created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL, product_id INT NOT NULL REFERENCES product (id));

-- Table: payment_details
CREATE TABLE payment_details (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, order_id INT NOT NULL REFERENCES order_details (id), amount VARCHAR NOT NULL, created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL, status VARCHAR NOT NULL, provider VARCHAR NOT NULL);

-- Table: product
CREATE TABLE product (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, name VARCHAR NOT NULL, "desc" TEXT NOT NULL, sku VARCHAR NOT NULL, category VARCHAR NOT NULL, price DECIMAL NOT NULL, discount_id INT CONSTRAINT prod_discount REFERENCES discount (id) NOT NULL, created_at INT NOT NULL, modified_at INT NOT NULL);

-- Table: role
CREATE TABLE role (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, name VARCHAR (100) NOT NULL, "desc" TEXT NOT NULL, created_at INT NOT NULL UNIQUE, modified_at INT NOT NULL UNIQUE, feature_id INT REFERENCES feature (id) NOT NULL);
INSERT INTO role (id, name, "desc", created_at, modified_at, feature_id) VALUES (1, 'admin', 'it''s for admin', 13131, 1212123, 1);

-- Table: shopping_session
CREATE TABLE shopping_session (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, total DECIMAL NOT NULL, user_id INT NOT NULL REFERENCES user (id), created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL);

-- Table: user
CREATE TABLE user (id INTEGER PRIMARY KEY UNIQUE NOT NULL, first_name VARCHAR NOT NULL, last_name VARCHAR NOT NULL, password VARCHAR NOT NULL UNIQUE, created_at DATETIME NOT NULL, modified_at DATETIME NOT NULL, phone VARCHAR NOT NULL, email VARCHAR UNIQUE NOT NULL, role_id INT REFERENCES role (id) NOT NULL);
INSERT INTO user (id, first_name, last_name, password, created_at, modified_at, phone, email, role_id) VALUES (1, 'kj', 'kj', 'kjh', 'j', 'kj', '1', '1', 1);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
