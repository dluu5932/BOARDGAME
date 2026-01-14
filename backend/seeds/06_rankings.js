// seeds/06_rankings.js
exports.seed = async function(knex) {
  await knex('rankings').del();

  await knex('rankings').insert([
    { user_id: 1, game_id: 1, score: 120 },
    { user_id: 2, game_id: 1, score: 95 },
    { user_id: 3, game_id: 2, score: 80 },
    { user_id: 4, game_id: 3, score: 150 },
    { user_id: 5, game_id: 4, score: 60 },
  ]);
};
