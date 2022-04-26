
exports.up = function(knex) {
    return knex.schema.createTable('categorias', function(table) {
    table.increments('id').primary();
    table.string('name', 128).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('categorias');
};
