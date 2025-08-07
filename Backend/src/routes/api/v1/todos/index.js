const { createTodo, getTodo, getALLTodos, deleteOne, deleteAll, edit } = require("../../../../controller/todo.controller");

async function todoRouter (fastify, options){
    fastify.get('/ping', (req, res)=>{
        return res.code(200).send({success: true, message:"Todo ping is up!!", data: []});

    });
    fastify.post('/', createTodo);
    fastify.get('/', getALLTodos);
    fastify.get('/:id',getTodo );
    fastify.delete('/:id', deleteOne);
    fastify.delete('/', deleteAll);
    fastify.put('/:id', edit);
};

module.exports=todoRouter;

