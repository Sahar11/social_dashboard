-- schema/03_create_pm.sql
DROP TABLE IF EXISTS pm CASCADE;
-- CREATE USERS
CREATE TABLE pm (
  id SERIAL PRIMARY KEY,
  pm VARCHAR(400) NOT NULL,
  to_user integer REFERENCES users(id) ON DELETE CASCADE NOT NULL
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  pm_date DATE,
  pm_time TIME
);