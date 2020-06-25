
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
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('quantity')
        .notNullable();
  })
};

exports.down = function(knex) {
  
};


// steps table needs a foreign key for recipe_id in recipe table