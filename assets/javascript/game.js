// Text input variables
var winsText = document.getElementById("wins-text");
var lossessText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesMadeText = document.getElementById("guessesMade-text");

// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

// Displayed text
function displayData() {
    winsText.textContent = "Wins: " + wins;
    lossessText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Number of guesses left: " + guessesLeft;
    guessesMadeText.textContent = "Guesses made: " + guessesMade;
}

displayData();


// Generate random string
function generate_random_string(string_length) {
    let random_string = "";
    let random_ascii;
    for (let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

// Messing around with other way to pull the alphabet 
// alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// var compGuess2 = alphabetArray[getRndInteger(0, 26)]
// console.log(compGuess2);

// Generate computer's guess from string
var compGuess = generate_random_string(1);

// Resets the game
function newGame() {
    guessesMade.length = 0;
    guessesLeft = 9;
    compGuess = generate_random_string(1);
}

// display content in console
function display() {
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("computer guess " + compGuess);
    console.log("Guesses left: " + guessesLeft);
    console.log("Guesses made: " + guessesMade);
    console.log("------------------------");
}

// Pull user's input
document.onkeydown = function game(event) {

    var userInput = event.key;
    // if guesses correctly, user wins
    if (userInput === compGuess) {
        wins++;
        newGame();
        display();
        displayData();

    } else {
        // If wrong guess, user gets 9 tries and then losses
        if (guessesLeft > 1) {
            guessesLeft--;
            guessesMade.push(userInput);
            display();
            displayData();

        } else {
            // After 9 guesses start over again with adding a loss and a new string
            losses++;
            newGame();
            display();
            displayData();
        }
    }
}