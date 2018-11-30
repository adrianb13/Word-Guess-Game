const oceanWords = ["meridian", "underwater", "turtle", "trench", "tidalwave", "mackerel", "yellowfin", "sailfish", "octopus", "starfish", "crustaceans", "cephalopods", "invertebrates", "nautilus", "anemone", "jellyfish", "dolphin", "hurricane"];

let gameWord = oceanWords[Math.floor(Math.random() * 18)];
    console.log(gameWord);

let lettersToGuess = []
    for (i = 0; i < gameWord.length; i++) {
        lettersToGuess.push(gameWord.charAt(i));
    }
console.log(lettersToGuess);

document.onkeyup = function(event) {
    var directionsText= document.getElementById("directions-text");
    directionsText.textContent = "Choose a letter to guess the word."
    var userText = document.getElementById("user-text");

var guess = event.key;
var rightText = document.getElementById("right-text");

for (j = 0; j < lettersToGuess.length; j++) {
    if (guess === lettersToGuess[j]) {
        console.log(guess = lettersToGuess[j]);
        rightText.textContent = "You guessed CORRECT!";
    } else {
        rightText.textContent = "You guess WRONG!";
    }
}

    userText.textContent = "You guessed: " + event.key;
};
