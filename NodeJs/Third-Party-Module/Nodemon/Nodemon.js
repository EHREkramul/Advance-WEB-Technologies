// Automatically restart the server when the file changes
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, Node baba.js!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
