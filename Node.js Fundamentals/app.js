// Exercise #1
// Appending text content in a file.

console.log('Starting app...');

const fs = require('fs');

// appendFile is deprecated in v7.2.0:
// "Calling an asynchronous function without callback is deprecated"
// Use appendFileSync instead.

fs.appendFileSync('greetings.txt', 'Hello World! ');

console.log('Completed!');
