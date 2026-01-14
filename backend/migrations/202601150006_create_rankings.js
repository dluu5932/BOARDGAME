// migrations/202601150006_create_rankings.js
exports.up = function(knex) {
  return knex.schema.createTable('rankings', (table) => {
    table.increments('id').primary();              // khóa chính
    table.integer('user_id').unsigned().notNullable()
         .references('id').inTable('users')
         .onDelete('CASCADE');                     // người chơi
    table.integer('game_id').unsigned().notNullable()
         .references('id').inTable('games')
         .onDelete('CASCADE');                     // game
    table.integer('score').notNullable();          // điểm số
    table.timestamp('created_at').defaultTo(knex.fn.now()); // thời gian ghi nhận
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rankings');
};
