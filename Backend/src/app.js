const fp = require('fastify-plugin');
const apiRouter = require('./routes/api/apiRouter');
const db = require('./db');


async function app(fastify, options){
    fastify.register(db);
    
    fastify.register(apiRouter, {prefix : '/api'});
}

module.exports = fp(app);