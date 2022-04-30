
exports.up = function(knex) {
    return knex.schema.createTable('dispositivos', function(table) {
    table.increments('id').primary();
    table.string('color', 16).notNullable();
    table.integer('partNumber').notNullable();

    table.integer('categoria_id').unsigned();

    table.foreign('categoria_id').references('id').inTable('categorias');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dispositivos');
};
