// Text input variables
var winsText = document.getElementById("wins-text");
var lossessText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesMadeText = document.getElementById("guessesMade-text");

// Variables
wins = 0;
losses = 0;
guessesLeft = 9;
guessesMadeText = "";

// Displayed text
winsText.textContent = "Wins: ";
lossessText.textContent = "Losses: " + toString.losses;
guessesLeftText.textContent = "Number of guesses left: " + toString.guessesLeft;
guessesMadeText.textContent = "Guesses made: " + toString.guessesMadeText;



// document.write("Wins: " + winsText);
// document.write("Losses: " + lossessText);
// document.write("Number of guesses left: " + guessesLeftText);
// document.write("Letters guessed: " + guessesMadeText);


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
document.onkeyup = function (event) {
    var userInput = event.key;



    if (userInput === compGuess) {

    }
}