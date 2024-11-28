const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a web server that listens on port 3000 and serves the following HTML file. The comments.js file should contain the JavaScript code that makes an AJAX request to the server at http://localhost:3000/comments and logs the response to the console.
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url === '/comments') {
        const comments = [
            { id: 1, text: 'This is the first comment' },
            { id: 2, text: 'This is the second comment' },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else if (req.url === '/comments.js') {
        fs.readFile(path.join(__dirname, 'comments.js'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading comments.js');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});