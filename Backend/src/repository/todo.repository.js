const fp = require('fastify-plugin');

class todoRepository {
    constructor(db){
        this.db = db;
    }
    async create(todoText){
       const todos =await this.db.getTodos();
       const newTodo ={
            id: Math.floor(100000 + Math.random() * 900000),
            todo: todoText,
            status: 'pending' 
       }
       todos.push(newTodo);
       await this.db.saveTodos(todos);
       return newTodo;
    }
    async getOne(id){
        const todos = await this.db.getTodos();
        const todo = todos.find(todo => todo.id === Number(id));
        return todo;
    }
    async getAll(){
        const todos = await this.db.getTodos();
        return todos;
    }
    async edit(id ,{todoText, status}){
        const todos = await this.db.getTodos();
        const todo = todos.find(todo => todo.id === Number(id));
        if(!todo) return null;
        if(todoText !== undefined) todo.todo = todoText;
        if(status !== undefined) todo.status = status;
        await this.db.saveTodos(todos);
        return todo;
    }
    async deleteOne(id){
        const todos = await this.db.getTodos();
        const newTodos = todos.filter(todo => todo.id !== Number(id));
        await this.db.saveTodos(newTodos);
        return newTodos;
    }
    async deleteAll(){
        const todos = [];
        await this.db.saveTodos(todos);
        return todos;
    }

}

async function todoRepositoryPlugin(fastify, options) {
    const {db} = fastify;
    const repo = new todoRepository(db);
    fastify.decorate('todoRepository', repo);
}

module.exports = fp(todoRepositoryPlugin);