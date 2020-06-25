
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', table => {
      table.increments();
      table.string('recipe_name')
        .unique()
        .notNullable();
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('quantity')
        .notNullable();
  })

  .createTable('ingredient', table => {
    table.increments();
    table.string('ingredient_name')
      .notNullable();
  })

  .createTable('steps', table => {
    table.increments();
    table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('step_name')
      .notNullable();
    table.string('step_description')
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('steps')
};


// steps table needs a foreign key for recipe_id in recipe table