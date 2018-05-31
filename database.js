const env = process.env.NODE_ENV
const config = require('./knexfile')[env];   //no need for .js
const knex = require('knex')(config);

module.exports = knex;
