// seeds/05_achievements.js
exports.seed = async function(knex) {
  await knex('achievements').del();

  await knex('achievements').insert([
    { user_id: 1, title: 'First Win', description: 'Thắng trận đầu tiên trong Tic-tac-toe' },
    { user_id: 2, title: 'Snake Master', description: 'Đạt 100 điểm trong game Rắn săn mồi' },
    { user_id: 3, title: 'Memory Champ', description: 'Hoàn thành cờ trí nhớ trong 2 phút' },
    { user_id: 4, title: 'Artist', description: 'Vẽ 10 hình trên bảng vẽ tự do' },
    { user_id: 5, title: 'Caro Pro', description: 'Thắng 3 trận liên tiếp trong Caro hàng 5' },
  ]);
};
