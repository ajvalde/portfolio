
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogpost').insert([
         {title: 'test', postdate: '04/20/2018', postcontent: 'more test'},
         {title: 'test2', postdate: '04/25/2018', postcontent: 'more testing stuff'}
      ]);
    });
};
