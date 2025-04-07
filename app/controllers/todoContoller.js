const Todos = require('../models/Todos');
// const {todoService,todoServiceById} = require('../services/todoService');

const getAllTodos = async (req, res) => {
    const todos = await Todos.find({});
    res.status(200).json({ 
        data: todos,
        success: true,
        message: `${req.method} - GET ALL REQUEST SUCCESSFUL`,
    });
};

const getTodoById = async (req, res) => {
    const {id}  = req.params;
    console.log('Creating new todo with data >>>', id);
    res.status(200).json({ 
        data: id,
        success: true,
        message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
    });
};

const createTodo = async (req, res) => {
    const {todos}  = req.body;
    try {
        const newTodos = await Todos.create(todos);
        console.log('Creating new todo with data >>>', newTodos);
        res.status(200).json({ 
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