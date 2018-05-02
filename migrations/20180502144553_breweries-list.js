exports.up = function(knex, Promise) {
  return knex.schema.createTable('breweries', (table) => {
    table.increments()
    table.text('brewery')
    table.text('style')
    table.text('location')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('breweries')
};
