const Todos = require('../models/Todos');
// const {todoService,todoServiceById} = require('../services/todoService');

//Get all todo
const getAllTodos = async (req, res) => {
    const todos = await Todos.find({});
    try {
        const todos = await Todos.find({});
        console.log('Creating new todo with data >>>', todos);
        res.status(200).json({ 
            data: todos,
            success: true,
            message: `${req.method} - GET ALL REQUEST SUCCESSFUL`,
        });
    }
    catch (error) {
        console.error('Error creating todo:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: error.message || 'Internal server error' });
        }
    }
};

//Get todo by id
const getTodoById = async (req, res) => {
    const {id}  = req.params;
    try {   
        const todos = await Todos.findById(id);
        console.log('Creating new todo with data >>>', todos);
        res.status(200).json({ 
            data: todos,
            success: true,
            message: `${req.method} - GET ALL REQUEST SUCCESSFUL`,
        });
    }
    catch (error) {
        console.error('Error creating todo:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: error.message || 'Internal server error' });
        }
    }
};

//Create todo
const createTodo = async (req, res) => {
    const {todos}  = req.body;
    try {
        const newTodos = await Todos.create(todos);
        console.log('Creating new todo with data >>>', newTodos);
        res.status(200).json({ 
            data: newTodos,
            data: todos, 
            success: true,
            message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
        });
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        else{
            console.error('Error creating todo:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: error.message || 'Internal server error' });
            }
        }
    }
};

//Update todo
const updateTodo = async (req, res) => {
    const  {id}  = req.params;
try {
    const todos = await Todos.findByIdAndUpdate(id, req.body, { new: true });
    console.log('Creating new todo with data >>>', todos);
    res.status(200).json({ 
        data: todos,
        data: id,
        success: true,
        message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
    });
}
catch (error) {
    console.error('Error creating todo:', error);
    if (!res.headersSent) {
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
};

//Delete todo
const deleteTodo = async (req, res) => {
    const  {id}  = req.params;
    try {
        const todos = await Todos.findByIdAndDelete(id, req.body, { new: true });
        console.log('Creating new todo with data >>>', todos);
        res.status(200).json({ 
            data: todos,
            data: id,
            success: true,
            message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
        });
    }
    catch (error) {
        console.error('Error creating todo:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: error.message || 'Internal server error' });
        }
    }
    };

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};