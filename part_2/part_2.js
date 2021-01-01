/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?
SHOW DATABASES

Q2) What is the query for using a specific database?
SELECT DATABASE

Q3) What is the query for creating a new database called `meraki`?
CREATE DATABASE meraki 

Q4) What is the query for deleting a database called `meraki`?
DROP meraki

Q5) What is the query for displaying all the tables for a database called `meraki`?
SHOW Tables

Q6) What is the query for displaying the columns of a table called `users`?
SELECT * FROM users

Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?
INSERT INTO users (name, email, password, age) VALUES (?,?,?,?)

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?

UPDATE  user SET name = ? WHERE email = info@meraki-academy.org`
Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?
DELETE FROM users WHERE email = `info@meraki-academy.org`

Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)
SELECT user_id, post_id from users WHERE users_user_id = post_post_id

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?
SELECT * FROM users WHERE age >20 AND age< 30

*/