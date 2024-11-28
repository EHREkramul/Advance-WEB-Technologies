const fs = require('fs');
const data = fs.readFileSync('testfile.txt', 'utf8'); // Synchronous
console.log(data);

fs.writeFileSync('output.txt', 'Hello, World!'); // Synchronous