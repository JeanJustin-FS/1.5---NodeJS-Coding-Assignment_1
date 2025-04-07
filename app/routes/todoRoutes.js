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

module.exports = router; 