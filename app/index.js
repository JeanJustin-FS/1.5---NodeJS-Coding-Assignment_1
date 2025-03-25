const express = require('express');
const app = express();
const router = require ('./routes');
const morgan = require('morgan');
// const todoHandler = require('./routes/todoRoutes')
// const middleware = require('./middleware');

// middleware(app);
app.use(express.json());
app.use(morgan('dev'));

//localhost:3000/
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'GET - root',
        metadata: {
        hostname: req.hostname,
        method: req.method,
        },
    });
});

app.use('/api/v1',router);
// app.use('/api/v1',todoHandler);

module.exports = app; 