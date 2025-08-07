const fp = require('fastify-plugin');

class todoServices {
    constructor(repo){
        this.repo = repo
    }
    async create(todoText){
       return await this.repo.create(todoText);
    }
    async getOne(id){
       return await this.repo.getOne(id);
    }
    async getAll(){
        return await this.repo.getAll();
    }
    async edit(id, {todoText, status}){
        return await this.repo.edit(id,{todoText, status});
    }
    async deleteOne(id){
        return await this.repo.deleteOne(id);
    }
    async deleteAll(){
        return await this.repo.deleteAll();
    }

}

async function todoServicesPlugin(fastify, options){
    const {todoRepository} = fastify;
    const services = new todoServices(todoRepository);
    fastify.decorate('todoServices', services)
};

module.exports= fp(todoServicesPlugin);