
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogPost', function (table) {
      table.integer('id').primary();
      table.string('title');
      table.date('postDate');
      table.text('post');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog')
};
