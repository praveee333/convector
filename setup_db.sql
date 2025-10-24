CREATE DATABASE IF NOT EXISTS convector_auth;
USE convector_auth;

CREATE USER IF NOT EXISTS 'convector_user'@'localhost' IDENTIFIED BY 'convector_password';
GRANT ALL PRIVILEGES ON convector_auth.* TO 'convector_user'@'localhost';
FLUSH PRIVILEGES;