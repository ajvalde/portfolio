
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogpost', function (table) {
      table.integer('id').primary();
      table.text('title');
      table.date('postdate');
      table.text('postcontent');
  })
};

exports.down = function(knex, Promise) {
  
};
