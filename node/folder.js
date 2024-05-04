const fs = require('fs');

// Specify the name of the new folder
const folderName = 'newFolder';

// Create the folder
fs.mkdir(folderName, (err) => {
  if (err) {
    console.error('Error creating folder:', err);
    return;
  }
  console.log('Folder created successfully!');
});
