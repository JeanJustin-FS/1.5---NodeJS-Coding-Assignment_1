const Todos = require('../models/Todos');
const todoService = require('../services/todoService');


const getAllTodos = async (req, res) => {
    try {
    console.log('params >>>', 'GET');
    const result = await todoService(); 
    res.status(200).json(result.data);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// router.get('/', async (req, res) => {
//     try {
//     const result = await todoService();
//     console.log('params >>>', 'GET');
//     res.status(200).json(result.data);
//     } catch (error) {
//     res.status(500).json({ error: error.message });
//     }
// }); 

const getTodoById = async (req, res) => {
    try {
    const {id} = req.params;
    console.log('params >>>', id);
    
    const result = await getTodoByIdService(id);
    if (!result || !result.data) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(result.data);
    } catch (err) {
    console.error('Error fetching todo:', err);
    if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
    }
};

const createTodo = async (req, res) => {
    try {
    const todoData = req.body;
    console.log('Creating new todo with data >>>', todoData);
    
    const result = await Todos(todoData);
    if (!result || !result.data) {
        return res.status(400).json({ error: 'Failed to create todo' });
    }
    res.status(201).json(result.data);
    } catch (err) {
    console.error('Error creating todo:', err);
    if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
    }
};

const updateTodo = async (req, res) => {
    try {
    const {id} = req.params;
    console.log('params >>>', id);
    const todoData = req.body;
    
    const existingTodo = await getTodoByIdService(id);
    if (!existingTodo || !existingTodo.data) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    const result = await updateTodoService(id, todoData);
    if (!result || !result.data) {
        return res.status(400).json({ error: 'Failed to update todo' });
    }
    res.status(200).json(result.data);
    } catch (err) {
    console.error('Error updating todo:', err);
    if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
    }
};

const deleteTodo = async (req, res) => {
    try {
    const {id} = req.params;
    console.log('params >>>', id);
    
    const existingTodo = await getTodoByIdService(id);
    if (!existingTodo || !existingTodo.data) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    const result = await deleteTodoService(id);
    if (!result) {
        return res.status(400).json({ error: 'Failed to delete todo' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
    console.error('Error deleting todo:', err);
    if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};