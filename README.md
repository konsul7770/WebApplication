Install app with command:
npm install
Before running it needs to create database and to enter valid dates in knexfile.js for connection to created database.
Then it needs to create a new migration to define the database schema. For that:

$ knex migrate:make users
$ knex migrate:latest --env development

Server running on localhost, port 1337
Home page http://localhost:1337/
