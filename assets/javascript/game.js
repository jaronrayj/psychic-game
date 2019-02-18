// Text input variables
var winsText = document.getElementById("wins-text");
var lossessText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesMadeText = document.getElementById("guessesMade-text");

// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = ["r", "t"];

console.log("Wins: " + wins);
// Displayed text

// winsText.textContent = "Wins: " + wins;
// lossessText.textContent = "Losses: " + losses;
// guessesLeftText.textContent = "Number of guesses left: " + guessesLeft;
// guessesMadeText.textContent = "Guesses made: " + guessesMade;


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

// Generate computer's guess from string
var compGuess = generate_random_string(1);
console.log("computer guess " + compGuess);


// Pull user's input
document.onkeydown = function game(event) {

    var userInput = event.key;
    // console.log("My Guess " + userInput);
    // if guesses correctly, user wins
    if (userInput === compGuess) {

        wins++;
        guessesLeft = 9;
        compGuess = generate_random_string(1);
        console.log("users points: " + wins);
        console.log("computer guess " + compGuess);

    } else {
        // If wrong guess, user gets 9 tries and then losses
        if (guessesLeft > 1) {

            guessesLeft--;
            console.log("Guesses left: " + guessesLeft);

        } else {
            // After 9 guesses start over again with adding a loss and a new string
            losses++;
            compGuess = generate_random_string(1);
            guessesLeft = 9;
            console.log("losses: " + losses);
            console.log("computer guess " + compGuess);
        }
    }
}