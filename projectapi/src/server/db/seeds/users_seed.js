exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert({
      username: 'user1',
      email: 'user1@mail.com',
      password: '123'
    });
  })
  .then(() => {
    return knex('users').insert({
      username: 'user2',
      email: 'user2@hotmail.com',
      password: '456'
    });
  })
  .then(() => {
    return knex('users').insert({
      username: 'user3',
      email: 'user3@gmail.com',
      password: '789'
    });
  });
};