// migrations/202601150005_create_achievements.js
exports.up = function(knex) {
  return knex.schema.createTable('achievements', (table) => {
    table.increments('id').primary();              // khóa chính
    table.integer('user_id').unsigned().notNullable()
         .references('id').inTable('users')
         .onDelete('CASCADE');                     // người sở hữu thành tựu
    table.string('title').notNullable();           // tên thành tựu
    table.text('description');                     // mô tả thành tựu
    table.timestamp('earned_at').defaultTo(knex.fn.now()); // thời gian đạt được
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('achievements');
};
