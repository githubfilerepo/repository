const http = require('http');
const fs = require('fs');

//URL of the file to download
const fileUrl = 'http://212.183.159.230/1GB.zip';

const filePath = '1GB.zip';

function progressBar(progress) {
    const width = 50;
    const completed = Math.round(width * progress);
    const remaining = width - completed;
    const completedBlock = '█'.repeat(completed);
    const remainingBlock = '░'.repeat(remaining);
    const bar = `\x1b[32m${completedBlock}\x1b[0m\x1b[31m${remainingBlock}\x1b[0m`;
    process.stdout.write(`Downloading... ${bar} ${Math.round(progress * 100)}%\r`);
}

const request = http.get(fileUrl, (response) => {

    const contentLength = parseInt(response.headers['content-length'], 10);
    const fileStream = fs.createWriteStream(filePath);
    let downloadedBytes = 0;

    response.on('data', (chunk) => {
        fileStream.write(chunk);
        downloadedBytes += chunk.length;
        const progress = downloadedBytes / contentLength;
        progressBar(progress);
    });

    response.on('end', () => {
        fileStream.end();
        console.log('\nFile downloaded successfully!');
    });

});


request.on('error', (err) => {
    console.error('Error downloading file:', err);
});