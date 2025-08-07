async function todoRouter (fastify, options){
    fastify.get('/ping', (req, res)=>{
        return  "Todo-Router is Up!!";
    })
};

module.exports=todoRouter;

