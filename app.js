const url = require('url');
const fs = require('fs');

const renderHTML = (path, response) => {
    fs.readFile(path, null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest : (request, response) => {
        response.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/test-route':
                renderHTML('./test-route.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined.');
                response.end();
        }
    }
};
