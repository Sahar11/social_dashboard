-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  gender VARCHAR(15) NOT NULL,  
  dob VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pwd VARCHAR(255),
  users_date DATE,
  user_time TIME
);