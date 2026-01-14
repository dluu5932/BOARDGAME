// seeds/03_friends.js
exports.seed = async function(knex) {
  await knex('friends').del();

  await knex('friends').insert([
    { user_id: 1, friend_id: 2, status: 'accepted' },
    { user_id: 1, friend_id: 3, status: 'pending' },
    { user_id: 2, friend_id: 4, status: 'accepted' },
    { user_id: 3, friend_id: 5, status: 'rejected' },
  ]);
};
