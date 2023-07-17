const fs = require('fs');

// Read File:
fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(err, data);
});

console.log("Finished reading file"); // This will print first becuase JS work on non blocking IO model
// readFile will take some time so JS will not delay the other code execution.

// Read File Sync:
// If we want node JS to block and wait for readFile to execute first,then we use:
const a = fs.readFileSync('file.txt');
console.log(a.toString());

// Write File:
fs.writeFile('file2.txt', 'This is second file data', () => {
    // When everything complete then do this:
    console.log('File created successfully');
});

console.log('Finish writing file'); // This will be execute before write file.

// Write File Sync:
fs.writeFileSync('file3.txt', 'This is third file written in Sync');

console.log('Finish writing file'); // This will be execute after write file.