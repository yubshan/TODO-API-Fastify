const fp = require('fastify-plugin');
const apiRouter = require('./routes/api/apiRouter');
const db = require('./db');
const todoRepository = require('./repository/todo.repository');
const todoService = require('./services/todo.service');


async function app(fastify, options){
    fastify.register(db);
    fastify.register(todoRepository);
    fastify.register(todoService);
    fastify.register(apiRouter, {prefix : '/api'});
}

module.exports = fp(app);