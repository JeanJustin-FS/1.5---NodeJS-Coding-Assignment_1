const express = require('express');
const router = express.Router();
const todoRoutes = require('./todoRoutes');
const userRoutes = require('./userRoutes');
const { use } = require('..');

//localhost:3000/api/v1/
router.get ('/', (req,res,) => {
console.log('GET');
res.status(200).json({message: 'Service is up'});
});

//localhost:3000/api/v1/
router.use('/todos',todoRoutes);
router.use ('/user',userRoutes)

module.exports = router;



