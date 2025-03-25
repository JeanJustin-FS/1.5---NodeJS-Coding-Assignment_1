// const http = require('http');
require('dotenv').config();
const app = require('./app')
const connectDB = require('./app/db/config')

connectDB();

// const server = http.createServer(app)

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
console.log (`listening on ${process.env.PORT}`);
});

// http.createServer(app).listen(process.env.PORT, () => {
//     console.log('server is running on port', process.env.PORT); 
// });
