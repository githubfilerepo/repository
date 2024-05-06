const fs = require('fs');

const oldPath = 'filename.txt';
const newPath = 'updatedfilename.txt';

fs.rename(oldPath, newPath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully.');
  }
});