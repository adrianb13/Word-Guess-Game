const oceanWords = ["meridian", "underwater", "turtle", "trench", "tidalwave", "mackerel", "yellowfin", "sailfish", "octopus", "starfish", "crustaceans", "cephalopods", "invertebrates", "nautilus", "anemone", "jellyfish", "dolphin", "hurricane", "mediterranean"];
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let gameWord = oceanWords[Math.floor(Math.random() * 19)];
    console.log(gameWord);

let lettersToGuess = [];
let blankDisplay = [];
    for (i = 0; i < gameWord.length; i++) {
        lettersToGuess.push(gameWord.charAt(i));
        blankDisplay[i] = "_ ";
        blankDisplay.push(gameWord.charAt(i));
    }
console.log(lettersToGuess);
blankDisplay.splice(lettersToGuess.length ,1);
blankDisplay.join(" ");
console.log(blankDisplay.join(" "));

document.onkeyup = function(event) {
    var dashes = document.getElementById("display-dashes");
        dashes.textContent = blankDisplay.join(" ");
    var letters = document.getElementById("letters-left");
        letters.textContent = "Letters available: " + alphabet.join(" ");
    var directionsText = document.getElementById("directions-text");
        directionsText.textContent = "Choose a letter to guess the word.";
    var guess = event.key.toLowerCase();
    var userText = document.getElementById("user-text");
        userText.textContent = "You guessed: " + event.key;    
    var rightText = document.getElementById("right-text");
    var wrongText = document.getElementById("wrong-text");
    var guessesLeft = document.getElementById("guesses-left");
    var guessLeft = 6;
    var winCount = document.getElementById("win-count");
    var wins = 0;
    var lossCount = document.getElementById("loss-count");
    var losses = 0;


    if (lettersToGuess.indexOf(guess) > -1) {
    // Displays chosen letter is correct
            rightText.textContent = "You guessed Correct!";
            wrongText.textContent = "";
    } else {
        if (guessLeft > 0) {
    // Displays chosen letter is wrong
            wrongText.textContent = "Wrong, Try Again!";
            rightText.textContent = "";
        } else {
                wrongText.textContent = "Game Over!";
                rightText.textContent = "";
        }
    }

    // Replaces dashes with correct letters guess
    for (j = 0; j < lettersToGuess.length; j++) {
    if (lettersToGuess[j].charAt(0) === guess) {
        blankDisplay.splice(lettersToGuess.indexOf(guess), 1, event.key);
        dashes.textContent = blankDisplay.join(" ");
        }
    }
    // Removes letters as letters are press
    if (alphabet.indexOf(guess) > -1) {
        alphabet.splice(alphabet.indexOf(guess), 1);
        letters.textContent = "Letters available: " + alphabet.join(" ");
    }

    // Game endings
    if (lettersToGuess.indexOf(guess) === -1) {
        var guessesLeft = document.getElementById("guesses-left");
        guessesLeft.textContent = guessLeft--;
        console.log(guessLeft);
        if (guessLeft === 0) {
            lossCount.textContent = losses++;
            rightText.textContent = "";
            wrongText.textContent = "You Lose! Try Again!";
            dashes.textContent = lettersToGuess.join(" ");        directionsText.textContent = "";
            userText.textContent = "";
        }
    } 

    if (blankDisplay.join("") === lettersToGuess.join("")) {
        rightText.textContent = "You Win!!!";
        wrongText.textContent = "";
        dashes.textContent = blankDisplay.join(" ");            directionsText.textContent = "";
        userText.textContent = "";
        winCount.textContent = wins++;
    }
};
