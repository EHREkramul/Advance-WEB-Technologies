const fs = require('fs');
const data = fs.readFileSync('testfile.txt', 'utf8'); // Synchronous
console.log(data);

fs.writeFileSync('output.txt', 'Hello, World!'); // Synchronous
const data2 = fs.readFileSync('output.txt', 'utf8');
console.log(data2);