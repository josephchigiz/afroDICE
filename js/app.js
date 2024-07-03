//! REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(res => console.log("service worker registered")).catch(err => console.log("service worker not registered"));
    })
};

// set the height of the document to the height of the window
// respecting resize and orientation change
function setDocHeight() {
    // get 100% height on mobile devices
    document.documentElement.style.setProperty("--vh", "${window.innerHeight/100}px");
}

window.addEventListener("resize", setDocHeight);
window.addEventListener("orientationchange", setDocHeight);

setDocHeight();

//! DICE SPINNING MECHANISM
let topDie = document.getElementById('topDie');
let bottomDie = document.getElementById('bottomDie');

function rollDice() {
    //when spin button is clicked, generate random number between 1 and 6
    let topRoll = getRandomDiceNumber();
    let bottomRoll = getRandomDiceNumber();

    // add 20% chance for dice to be the same
    if (Math.random() < 0.2 ) {
        bottomRoll === topRoll;
    } else {
        //ensure dice numbers are unique
        while (bottomRoll === topRoll) {
            bottomRoll = getRandomDiceNumber()
        }
    }
    
    // set dice to spinning gifs
    topDie.src = `/assets/diceSpin-fast.gif`;
    bottomDie.src = `/assets/diceSpin-fast.gif`;

    // after 2 seconds, set image to final dice phase
    setTimeout(function (){
        topDie.src = `/assets/${topRoll}.png`;
        bottomDie.src = `/assets/${bottomRoll}.png`;
    }, 800)
}

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

//! SPIN BUTTON
let spinButton = document.getElementById('spinButton');
spinButton.addEventListener('click', rollDice);