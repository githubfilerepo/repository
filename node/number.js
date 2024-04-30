function getRandomNumber() {
    const length = Math.floor(Math.random() * 10) + 1; // Random length between 1 and 10
    let randomNumber = '';
    for (let i = 0; i < length; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return parseInt(randomNumber);
}

const randomNumber = getRandomNumber();
console.log(randomNumber);
