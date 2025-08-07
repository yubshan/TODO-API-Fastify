const fp = require('fastify-plugin');
const fs = require('fs').promises;
async function fetchTodos (){
    try {
        const data = await fs.readFile('db.txt', 'utf-8');

        if(!data.trim()){
            return [];
        }

        return JSON.parse(data);

    } catch (error) {
        if(error.code === 'ENOENT'){
            await fs.writeFile('db.txt', '[]', 'utf-8');
            return [];
        }
        console.log("Error Reading Db file.");
        return [];
    }
}


async function db(fastify, options){
    
    fastify.decorate('db', {
        'getTodos' : async ()=>{return await fetchTodos();} ,
        "saveTodos" : async (todos) => {await fs.writeFile('db.txt', JSON.stringify(todos, null , 2), 'utf-8')}
    })
};


module.exports = fp(db);