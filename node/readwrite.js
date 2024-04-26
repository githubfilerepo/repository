const fs = require('fs');
const readline = require('readline');

const databaseFile = 'database.txt';

// Function to read data from the database file
function readData() {
    try {
        const data = fs.readFileSync(databaseFile, 'utf8');
        console.log('Data read from database:');
        console.log(data);
    } catch (err) {
        console.error('Error reading data:', err);
    }
}

// Function to write data to the database file
function writeData(input) {
    try {
        fs.appendFileSync(databaseFile, input + '\n');
        console.log('Data written to database:', input);
    } catch (err) {
        console.error('Error writing data:', err);
    }
}

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to continuously ask user for input
function askForInput() {
    rl.question('Enter data to store in the database (or type "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            // Close readline interface and exit
            rl.close();
            console.log('Exiting...');
        } else {
            // Write input to database file
            writeData(input);
            
            // Read and display data from database file
            readData();

            // Ask for input again
            askForInput();
        }
    });
}

// Start asking for input
askForInput();
