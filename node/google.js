const readline = require('readline');
const googleIt = require('google-it');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function searchGoogle(query) {
    return googleIt({ 'query': query });
}

rl.question('Enter your search query: ', async (query) => {
    try {
        const results = await searchGoogle(query);
        console.log(results);
    } catch (error) {
        console.error("Error searching Google:", error);
    }
    rl.close();
});
