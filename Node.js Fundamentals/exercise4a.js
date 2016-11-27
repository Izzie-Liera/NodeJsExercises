// Exercise #4a
// This exercise will execute "exercise4b.js" file, using require.

console.log('Starting...');

const fs = require('fs');
const os = require('os');
var user = os.userInfo();

// const that stores the location where the other file will be required:
const notes = require('./exercise4b.js');

fs.appendFileSync('greetings.txt', `Hello ${user.username} \r\n You're are ${notes.age}!`);

console.log('Completed!');
