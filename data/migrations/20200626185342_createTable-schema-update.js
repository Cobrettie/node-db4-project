
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', table => {
      table.increments();
      table.string('recipe_name', 128)
        .unique()
        .notNullable();
      table.integer('ingredient_id')
        .references('id')
        .inTable('ingredient')
        .unsigned()
        .notNullable();
      table.integer('direction_id')
        .references('id')
        .inTable('direction')
        .unsigned()
        .notNullable();
    })

    .createTable('ingredient', table => {
      table.increments();
      table.string('ingredient_name')
        .notNullable()
        .unique()
      table.string('amount')
        .notNullable()
      table.string('unit')
      .notNullable()
    })

    .createTable('instruction', table => {
      table.increments();
      table.string('instruction_name')
        .notNullable()
    })

    .createTable('steps', table => {
      table.increments();
      table.string('step_name')
        .notNullable()
      table.integer('instruction_id')
        .references('id')
        .inTable('instruction')
        .unsigned()
        .notNullable()
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('recipe')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('instruction')
  .dropTableIfExists('steps')
}; 
