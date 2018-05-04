create database Glamazon;

use Glamazon;

create table products (
item_id INT AUTO_INCREMENT,
product_name VARCHAR(60) NOT NULL,
department_name VARCHAR(60) NOT NULL,
price DECIMAL(5,2) NOT NULL,
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purple Wig", "Accessories", 15.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fancy Cat Food", "Pets", 3.50, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fancy Bird Food", "Pets", 5.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Regular Dirt", "Home & Garden", 10.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Supremely Fancy Dirt", "Home & Garden", 11.00, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Photography Book", "Books", 8.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("A Study On Procrastination", "Books", 100.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Millions of Bobby Pins", "Accessories", 1.00, 1000000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("La Mer Moisturizer", "Accessories", 350.25, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("La Sewer Moisturizer", "Accessories", 2.25, 110);




