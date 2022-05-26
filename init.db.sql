CREATE DATABASE IF NOT EXISTS testDb;
create USER IF NOT EXISTS 'testUser'@'%' identified by 'password';
GRANT ALL on *.* to 'testUser'@'%';
FLUSH PRIVILEGES;