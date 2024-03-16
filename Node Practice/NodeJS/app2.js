var fileSystem = require('fs');

// Diff b/w writeFile and appendFile -
// writeFile - remove entire content in the file and write the new one.
// appendFile - add the new one at the end of existing content.

fileSystem.readFile('./FileSystem.txt', 'utf8', (err, data) => {
    console.log(data);
});

var response = '\nJimmy : I am good.';
fileSystem.appendFile('./FileSystem.txt', response, 'utf8', err => {
    console.log('Data Saved...');
});

fileSystem.readFile('./FileSystem.txt', 'utf8', (err, data) => {
    console.log(data);
});

// used to delete the mentioned file
fileSystem.unlink('./FileSystem.txt', err => {
    console.log('File Deleted...');
});