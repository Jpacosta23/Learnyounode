const fs = require('fs');
const file = process.argv[2];
const bufferFile = fs.readFileSync(file);
const lines = bufferFile.toString().split('\n').length - 1;
console.log(lines);
