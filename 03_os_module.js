// Build in modules do not require any path to import as like second.js
const os = require('node:os');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.machine());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.version());