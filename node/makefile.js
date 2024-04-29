const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the filename you want to create: ', (filename) => {
    fs.writeFile(filename, '', (err) => {
        if (err) {
            console.error('Error creating file:', err);
        } else {
            console.log(`File ${filename} created successfully.`);
        }
        rl.close();
    });
});
