// Exercise #5a
// This exercise will execute "exercise5b.js" file, using require.

console.log('Starting...');

const fs = require('fs');
const os = require('os');

// const that stores the location where the other file will be required:
const notes = require('./exercise6b.js');

console.log('Result:' , notes.add(-1,9));

console.log('Completed!');
