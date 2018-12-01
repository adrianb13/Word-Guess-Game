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
        userText.textContent = "You guessed: " + event.key;

    var guess = event.key;
    var rightText = document.getElementById("right-text");
    var wrongText = document.getElementById("wrong-text");
    var guessLeft = 6

    if (lettersToGuess.indexOf(guess) > -1) {
        console.log(lettersToGuess.indexOf(guess));
        var rightText = document.getElementById("right-text");
            rightText.textContent = "You guessed Correct!";
        var wrongText = document.getElementById("wrong-text");
            wrongText.textContent = "";
    } else {
        guessLeft--;
        console.log(guessLeft)
        if (guessLeft > 0) {
        var wrongText = document.getElementById("wrong-text");
            wrongText.textContent = "Wrong, Try Again!";
        var rightText = document.getElementById("right-text");
            rightText.textContent = "";
        } else {
            var wrongText = document.getElementById("wrong-text");
                wrongText.textContent = "Game Over!";
            var rightText = document.getElementById("right-text");
                rightText.textContent = "";
        }
    }


};
