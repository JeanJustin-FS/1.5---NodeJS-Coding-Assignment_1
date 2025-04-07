const router = require('express').Router();
// const {todoService,todoServiceById} = require ('../services/todoService');

const { getAllTitles,
    getTitlesById,
    createTitle,
    updateTitle,
    deleteTitle } = require('../controllers/userController');

    router.get('/', getAllTitles);
    router.get('/:id', getTitlesById);
    router.post('/', createTitle);
    router.put('/:id', updateTitle);
    router.delete('/:id', deleteTitle);

    module.exports = router; 