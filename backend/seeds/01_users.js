// seeds/01_users.js
exports.seed = async function(knex) {
  // Xóa dữ liệu cũ
  await knex('users').del();

  // Thêm dữ liệu demo
  await knex('users').insert([
    { username: 'duc', password: '123456', email: 'duc@example.com', role: 'admin' },
    { username: 'linh', password: '123456', email: 'linh@example.com', role: 'client' },
    { username: 'nam', password: '123456', email: 'nam@example.com', role: 'client' },
    { username: 'hoa', password: '123456', email: 'hoa@example.com', role: 'client' },
    { username: 'phuc', password: '123456', email: 'phuc@example.com', role: 'client' },
  ]);
};
