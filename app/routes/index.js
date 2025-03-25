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

// const express = require('express');
// const router = express.Router();
// const todoRoutes = require('./todoRoutes')
// const {} = require();

// //GET all cars
// `localhost:3000/api/ `;
// router.get('/', (req,res) => {
//     res.status(200).json({ message: 'Get from API',
//     metadata: {hostname: req.hostname, method: req.method}
// });
// });

// //GET car by id
// `localhost:3000/api/:id `;
// router.get('/:id',(req,res) => {
//     const {id} = req.params.id;
//     console.log('params >>>', id)
//     res.status(200).json({ Message: 'Get request by ID Successful'})
// });

// //POST new car
// router.post('/',(req,res) => {
// console.log('Request body >>>', req.body);
// const {data} = req.body;
// res.status(200).json({ message: 'Post request Successfull', 
// data, metadata: {hostname: req.hostname, method: req.method}
// });
// });

//     // Update car by Id 
// router.put('/:id',(req,res) => {
//     const id = req.params.id;
//     console.log('params >>>', id)
//     res.status(200).json({ Message: 'Update request by ID Successful',
//     data, metadata: {hostname: req.hostname, method: req.method}
// });
// });

//     // Delete car by Id 
// router.delete('/:id',(req,res) => {
//     const id = req.params.id;
//     console.log('params >>>', id)
//     res.status(200).json({ Message: 'Delete request by ID Successful',
//         data, metadata: {hostname: req.hostname, method: req.method}     
// });
// });

// app.use('/todos/v1',todoRoutes);


// module.exports = router; 



