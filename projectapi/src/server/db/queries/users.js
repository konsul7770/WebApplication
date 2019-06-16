const bcrypt = require('bcryptjs');
const knex = require('../connection');

function addUser(user) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(user.password, salt);
  return knex('users')
  .insert({
    username: user.username,
    password: hash,
  })
  .returning('*');
}

function getAllUsers() {
  return knex('users')
  .select('*');
}

module.exports = {
  addUser,
  getAllUsers
};