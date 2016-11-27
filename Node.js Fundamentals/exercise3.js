// Exercise #3
// Using template Strings (ES6 feature) to concatenate variables inside Strings.

console.log('Starting app...');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username} !`);

console.log('Completed!');
