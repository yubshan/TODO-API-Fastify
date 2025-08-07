const fp = require('fastify-plugin');
const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '/db.txt');
async function fetchTodos (){
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        if(!data.trim()){
            return [];
        }

        return JSON.parse(data);

    } catch (error) {
        if(error.code === 'ENOENT'){
            await fs.writeFile(filePath, '[]', 'utf-8');
            return [];
        }
        console.log("Error Reading Db file.");
        return [];
    }
}


async function db(fastify, options){
    
    fastify.decorate('db', {
        'getTodos' : async ()=>{return await fetchTodos();} ,
        "saveTodos" : async (todos) => {await fs.writeFile(filePath, JSON.stringify(todos, null , 2), 'utf-8')}
    })
};


module.exports = fp(db);