const http = require('http');
const app = require('./app.js');

http.createServer(app.handleRequest).listen(8000);