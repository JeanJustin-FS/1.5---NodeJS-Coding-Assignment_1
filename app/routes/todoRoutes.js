const router = require('express').Router();
// const {todoService,todoServiceById} = require ('../services/todoService');
const { getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo } = require('../controllers/todoContoller');

router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);


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

module.exports = router; 