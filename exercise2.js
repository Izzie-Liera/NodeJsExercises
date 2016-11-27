// Exercise #2
// Retrieving user and system information and appending it to our file.

console.log('Starting app...');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
var platform = os.platform();

console.log("User: " + user.username);
console.log("Platform: " + platform);

fs.appendFileSync('greetings.txt', " Message: Hello World! " + "\r\n,User name: " + user.username +  "\r\n,Platform: " + platform);

console.log('Completed!');
