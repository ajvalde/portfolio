
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function (table) {
      table.increments();
      table.text('postTitle');
      table.text('post');
      table.date('postDate');
  })
};

exports.down = function(knex, Promise) {
  
};
