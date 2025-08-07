const todoRouter = require("./todos");

async function v1Router (fastify, options){
   fastify.register(todoRouter, {prefix : '/todos'});
};

module.exports=v1Router;

