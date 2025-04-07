const express = require('express');
const router = express.Router();
const todoRoutes = require('./todoRoutes')
// const {} = require();

// app.use(express.json());

//localhost:3000/api/v1/
router.get ('/', (req,res,) => {
console.log('GET');
res.status(200).json({message: 'Service is up'});
});

// router.use((req,res,next) => {
// const error = new  Error ('Not Found');
// error.status = 404;
// next(error);
// });

// router.use((err, req, res, next) => {
// console.log ('ERROR >>>', err);
// res.status(err.status || 500)
// .json({message: err.message, status: err.status });
// });

//localhost:3000/api/v1/
router.use('/todos',todoRoutes);

module.exports = router;



