document.getElementById('spin-button').addEventListener('click', spinDice);

function spinDice() {
    let topDiceNumber = getRandomDiceNumber();
    let bottomDiceNumber = getRandomDiceNumber();

    // 10% chance for the dice to be the same
    if (Math.random() < 0.1) {
        bottomDiceNumber = topDiceNumber;
    } else {
        // Ensure the dice numbers are unique
        while (bottomDiceNumber === topDiceNumber) {
            bottomDiceNumber = getRandomDiceNumber();
        }
    }

    document.getElementById('top-dice').textContent = topDiceNumber;
    document.getElementById('top-number').textContent = topDiceNumber;
    document.getElementById('bottom-dice').textContent = bottomDiceNumber;
    document.getElementById('bottom-number').textContent = bottomDiceNumber;
}

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
