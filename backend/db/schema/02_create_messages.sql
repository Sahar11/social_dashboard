-- schema/02_create_messages.sql
DROP TABLE IF EXISTS messages CASCADE;
-- CREATE USERS
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message VARCHAR(400) NOT NULL,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  message_date DATE,
  message_time TIME
);