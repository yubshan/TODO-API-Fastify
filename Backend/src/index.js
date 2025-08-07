const app = require('./app');
const { PORT } = require('./config/server.config');

const fastify = require('fastify')({
    logger: true,

});

fastify.register(app);

fastify.listen({port : PORT} , (err) => {
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is running on Port: ${PORT}`);
    
});