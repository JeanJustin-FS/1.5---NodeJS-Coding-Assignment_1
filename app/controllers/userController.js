const Titles = require('../models/Titles');
// const {todoService,todoServiceById} = require('../services/todoService');

const getAllTitles = async (req, res) => {
    const titles = await Titles.find({});
    res.status(200).json({ 
        data: titles,
        success: true,
        message: `${req.method} - GET ALL REQUEST SUCCESSFUL`,
    });
};

// GET ALL route 
// router.get('/', async (req, res) => {
//     try {
//     const result = await todoService();
//     console.log('params >>>', 'GET');
//     res.status(200).json(result.data);
//     } catch (error) {
//     res.status(500).json({ error: error.message });
//     }
// });

const getTitlesById = async (req, res) => {
    const {id}  = req.params;
    console.log('Creating new todo with data >>>', id);
    res.status(200).json({ 
        data: id,
        success: true,
        message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
    });
};


// const getTodoById = async  (req, res) => {
//         const {id} = req.params;
//         console.log('params >>>', id);
        
//         todoServiceById(id)
//         .then(result => {
//             if (!result || !result.data) {
//             return res.status(404).json({ error: 'Todo not found' });
//             }
//             res.status(200).json(result.data);
//         })
//         .catch(err => {
//             console.error('Error fetching todo:', err);
        
//             if (!res.headersSent) {
//             res.status(500).json({ error: err.message || 'Internal server error' });
//             }
//         });
//     };

    // GET by ID route 
// router.get('/:id', (req, res) => {
//     const {id} = req.params;
//     console.log('params >>>', id);
    
//     todoServiceById(id)
//     .then(result => {
//         if (!result || !result.data) {
//         return res.status(404).json({ error: 'Todo not found' });
//         }
//         res.status(200).json(result.data);
//     })
//     .catch(err => {
//         console.error('Error fetching todo:', err);
    
//         if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//         }
//     });
// });

const createTitle = async (req, res) => {
    const {titles}  = req.body;
    try {
        const newTodos = await Titles.create(titles);
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

// const createTodo = async (req, res) => {
//     try {
//     const todoData = req.body;
//     const newTodos = await Todos.create(todoData);
//     console.log('Creating new todo with data >>>', newTodos);
//     const result = await todoService(todoData);
//     if (!result || !result.data) {
//         return res.status(400).json({ error: 'Failed to create todo' });
//     }
//     res.status(201).json(result.data);
//     } catch (err) {
//     console.error('Error creating todo:', err);
//     if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//     }
//     }
// };


// POST route 
// router.post('/', (req, res) => {
//     const todoData = req.body;
//     console.log('Creating new todo with data >>>', todoData);
    
//     // Call your service function that creates a new todo
//     todoService(todoData) 
//     .then(result => {
//         if (!result || !result.data) {
//         return res.status(400).json({ error: 'Failed to create todo' });
//         }
//         res.status(201).json(result.data);  
//     })
//     .catch(err => {
//         console.error('Error creating todo:', err);
//         if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//         }
//     });
// });


const updateTitle = async (req, res) => {
    const  {id}  = req.params;
try {
    const title = await Titles.findByIdAndUpdate(id, req.body, { new: true });
    console.log('Creating new todo with data >>>', title);
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

// const updateTodo = async (req, res) => {
//     try {
//     const {id} = req.params;
//     console.log('params >>>', id);
//     const todoData = req.body;
    
//     const existingTodo = await todoServiceById(id);
//     if (!existingTodo || !existingTodo.data) {
//         return res.status(404).json({ error: 'Todo not found' });
//     }
    
//     const result = await todoService(id, todoData);
//     if (!result || !result.data) {
//         return res.status(400).json({ error: 'Failed to update todo' });
//     }
//     res.status(200).json(result.data);
//     } catch (err) {
//     console.error('Error updating todo:', err);
//     if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//     }
//     }
// };

  // PUT route 
// router.put('/:id', (req, res) => {
//     const {id} = req.params;
//     console.log('params >>>', id);
//     const todoData = req.body;
    
//     todoServiceById(id)
//     .then(result => {
//         if (!result || !result.data) {
//         return res.status(404).json({ error: 'Todo not found' });
//         }
//         res.status(200).json(result.data);
//     })
//     .catch(err => {
//         console.error('Error updating todo:', err);
//         if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//         }
//     });
// });

const deleteTitle = async (req, res) => {
    const  {id}  = req.params;
    try {
        const titles = await Titles.findByIdAndDelete(id, req.body, { new: true });
        console.log('Creating new todo with data >>>', todos);
        res.status(200).json({ 
            data: titles,
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

// const deleteTodo = async (req, res) => {
//     try {
//     const {id} = req.params;
//     console.log('params >>>', id);
    
//     const existingTodo = await todoServiceById(id);
//     if (!existingTodo || !existingTodo.data) {
//         return res.status(404).json({ error: 'Todo not found' });
//     }
    
//     const result = await todoServiceById(id);
//     if (!result) {
//         return res.status(400).json({ error: 'Failed to delete todo' });
//     }
//     res.status(200).json({ message: 'Todo deleted successfully' });
//     } catch (err) {
//     console.error('Error deleting todo:', err);
//     if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//     }
//     }
// };

  // DELETE route
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     console.log('params >>>', id);
    
//     todoServiceById(id)
//     .then(result => {
//         if (!result) {
//         return res.status(404).json({ error: 'Todo not found' });
//         }
//         res.status(200).json({ message: 'Todo deleted successfully' });
//     })
//     .catch(err => {
//         console.error('Error deleting todo:', err);
//         if (!res.headersSent) {
//         res.status(500).json({ error: err.message || 'Internal server error' });
//         }
//     });
// });

module.exports = {
    getAllTitles,
    getTitlesById,
    createTitle,
    updateTitle,
    deleteTitle,
};