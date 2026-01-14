// migrations/202601150002_create_games.js
exports.up = function(knex) {
  return knex.schema.createTable('games', (table) => {
    table.increments('id').primary();        // khóa chính
    table.string('name').notNullable();      // tên game (caro, tic-tac-toe...)
    table.text('description');               // mô tả game
    table.boolean('enabled').defaultTo(true); // bật/tắt game
    table.integer('board_size').defaultTo(3); // kích thước bàn (ví dụ 3x3, 5x5)
    table.timestamps(true, true);            // created_at, updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('games');
};
