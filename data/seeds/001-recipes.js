
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, recipe_name: 'recipe 1', ingredient_id: 1, quantity: 4},

        {id: 2, recipe_name: 'recipe 2',      ingredient_id: 1, quantity: 4},

        {id: 3, recipe_name: 'recipe 3', ingredient_id: 1, quantity: 4},
      ]);
    });
};
