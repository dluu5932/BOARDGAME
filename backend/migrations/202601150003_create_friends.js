// migrations/202601150003_create_friends.js
exports.up = function(knex) {
  return knex.schema.createTable('friends', (table) => {
    table.increments('id').primary();           // khóa chính
    table.integer('user_id').unsigned().notNullable()
         .references('id').inTable('users')
         .onDelete('CASCADE');                  // người dùng
    table.integer('friend_id').unsigned().notNullable()
         .references('id').inTable('users')
         .onDelete('CASCADE');                  // bạn bè
    table.string('status').defaultTo('pending'); // trạng thái: pending/accepted/rejected
    table.timestamps(true, true);               // created_at, updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('friends');
};
