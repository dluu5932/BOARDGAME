// migrations/202601150004_create_messages.js
exports.up = function(knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary();             // khóa chính
    table.integer('sender_id').unsigned().notNullable()
         .references('id').inTable('users')
         .onDelete('CASCADE');                    // người gửi
    table.integer('receiver_id').unsigned().notNullable()
         .references('id').inTable('users')
         .onDelete('CASCADE');                    // người nhận
    table.text('content').notNullable();          // nội dung tin nhắn
    table.timestamp('created_at').defaultTo(knex.fn.now()); // thời gian gửi
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages');
};
