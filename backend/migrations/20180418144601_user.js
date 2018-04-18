
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.integer('id').primary();
    table.string('name');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  
};
