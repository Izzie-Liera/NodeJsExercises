// Exercise #5a
// This exercise will execute "exercise5b.js" file, using require.

console.log('Starting...');

const fs = require('fs');
const os = require('os');

// const that stores the location where the other file will be required:
const notes = require('./exercise5b.js');

var res = notes.addNote();
console.log(res);

console.log('Completed!');

