const express = require('express');
const recipeRouter = require('./Recipes/recipeRouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipe', recipeRouter);

module.exports = server;