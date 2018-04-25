
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogpost', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.date('postdate');
      table.text('postcontent');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogpost')
};
