async function createTodo(req, res){
    const {todoServices} = this;
    const todoText = req.body.content;
    const response =await todoServices.create(todoText);
    return res.code(201).send({success : true, message: "Added New Todo", data: response});
}

async function getALLTodos(req, res){
    const {todoServices} = this;
    const todos = await todoServices.getAll();
    if(!todos) return res.code(404).send({success: false, message: "No Todos are found.", data: []});
    return res.code(200).send({success: true, message:"All Todo Fetched Successfully.", data: todos});
}

async function  getTodo(req, res) {
    const {todoServices} = this;
    const id = req.params.id;
    const response = await todoServices.getOne(id);
    if(!response) return res.code(404).send({success: false, message: "No Todo is found.", data: []});
    return res.code(200).send({success:true , message:`Todo Successfully fetched of id : ${id}`, data: response});

}   

async function deleteOne(req, res) {
    const {todoServices} = this;
    const id = req.params.id;
    const response = await todoServices.deleteOne(id);
    return res.code(200).send({success: true, message: `Todo of id: ${id} Deleted Successfully `, data : response})
}

async function deleteAll(req, res) {
    const {todoServices} = this;
    const response = await todoServices.deleteAll();
    return res.code(200).send({success: true, message: `ALl Todo  Deleted Successfully `, data : response})
}

async function edit(req, res){
    const {todoServices} = this;
    const {todoText , status} = req.body;
    const id = req.params.id;
    const response = await todoServices.edit(id , {todoText, status});
    return res.code(200).send({success: true , message: `Edited a Todo of id : ${id}`, data: response });
}

module.exports ={
    createTodo,
    getALLTodos,
    getTodo, 
    deleteOne,
    deleteAll,
    edit
}