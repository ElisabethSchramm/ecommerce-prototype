USE ecommerce;

-- -----------------------------------------------------
-- Customer
-- -----------------------------------------------------
INSERT INTO customer (first_name, last_name, email)
VALUES ('afasa', 'afasa', 'afasa@test.com');

-- Kunden-ID abfragen
SET @customer_id = LAST_INSERT_ID();

-- -----------------------------------------------------
-- Address
-- -----------------------------------------------------
-- Shipping Address
INSERT INTO address (street, city, state, country, zip_code)
VALUES ('afasa', 'afasa', 'Alberta', 'Canada', 'afasa');
SET @shipping_address_id = LAST_INSERT_ID();

-- Billing Address
INSERT INTO address (street, city, state, country, zip_code)
VALUES ('fsfsf', 'sfdsf', 'Acre', 'Brazil', '19111');
SET @billing_address_id = LAST_INSERT_ID();

-- -----------------------------------------------------
-- Order
-- -----------------------------------------------------
INSERT INTO orders (order_tracking_number, total_price, total_quantity, billing_address_id, shipping_address_id, customer_id, status, date_created, last_updated)
VALUES (CONCAT('TRACK-', FLOOR(RAND()*1000000)), 36.98, 2, @billing_address_id, @shipping_address_id, @customer_id, 'IN_PROGRESS', NOW(), NOW());

SET @order_id = LAST_INSERT_ID();

-- -----------------------------------------------------
-- Order Items
-- -----------------------------------------------------
INSERT INTO order_item (image_url, quantity, unit_price, order_id, product_id)
VALUES
('assets/images/products/placeholder.png', 1, 18.99, @order_id, 26),
('assets/images/products/placeholder.png', 1, 17.99, @order_id, 51);
