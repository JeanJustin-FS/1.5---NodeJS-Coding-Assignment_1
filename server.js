// const http = require('http');
require('dotenv').config();
const app = require('./app')
const connectDB = require('./app/db/config');

connectDB();

// const server = http.createServer(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log (`listening on ${PORT}`);
});


