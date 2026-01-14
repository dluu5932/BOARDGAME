// seeds/02_games.js
exports.seed = async function(knex) {
  await knex('games').del();

  await knex('games').insert([
    { name: 'Caro hàng 5', description: 'Game caro 5 ô liên tiếp', board_size: 15 },
    { name: 'Caro hàng 4', description: 'Game caro 4 ô liên tiếp', board_size: 10 },
    { name: 'Tic-tac-toe', description: 'Game XO 3x3', board_size: 3 },
    { name: 'Rắn săn mồi', description: 'Snake game cổ điển', board_size: 20 },
    { name: 'Ghép hàng 3', description: 'Candy crush style', board_size: 8 },
    { name: 'Cờ trí nhớ', description: 'Memory card game', board_size: 6 },
    { name: 'Bảng vẽ tự do', description: 'Drawing board', board_size: 20 },
  ]);
};
