CREATE USER 'ecommerceapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ecommerceapp';
GRANT ALL PRIVILEGES ON *.* TO 'ecommerceapp'@'localhost';
FLUSH PRIVILEGES;