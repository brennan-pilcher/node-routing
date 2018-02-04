const http = require('http');
const app = require('./app.js');
const port = process.env.port || 8080;

http.createServer(app.handleRequest).listen(port);