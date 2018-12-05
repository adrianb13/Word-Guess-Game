const oceanWords = ["meridian", "underwater", "turtle", "trench", "tidalwave", "mackerel", "yellowfin", "sailfish", "octopus", "starfish", "crustaceans", "cephalopods", "trumpetfish", "nautilus", "anemone", "jellyfish", "dolphin", "butterflyfish", "mediterranean", "sturgeon", "angelfish", "coelacanth", "angelfish", "triggerfish", "crocodile", "geoduck", "caribbean", "pyrosome", "cuttlefish", "barnacle", "anglerfish", "seadragon", "guitarfish", "cormorant", "seahorse", "frigatebird", "angelshark", "blackdragon", "halibut", "hammerhead", "parrotfish", "fringehead", "stringray", "anchoveta", "scorpionfish", "bristlemouth", "flyingfish", "wobbegong", "porcupinefish", "damselfish", "epipelagic", "mesopelagic", "bathypelagic", "abyssopelagic", "hadopelagic", "bioluminescent", "plankton", "rockfish", "albacore", "albatross", "limpet", "penguin", "adriatic", "philippine", "ionian", "caspian"];

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let gameWord = oceanWords[Math.floor(Math.random() * oceanWords.length)];
    console.log(gameWord);

let lettersToGuess = [];
let blankDisplay = [];
let answer = [];
    
for (i = 0; i < gameWord.length; i++) {
    lettersToGuess.push(gameWord.charAt(i));
    blankDisplay[i] = "_ ";
    blankDisplay.push(gameWord.charAt(i));
    answer.push(gameWord.charAt(i));
}
    console.log(answer);

blankDisplay.splice(lettersToGuess.length ,1);
blankDisplay.join(" ");
var guessLeft = 6;
var wins = 0;
var losses = 0;

document.onkeyup = function(event1) {
    if (event1.keyCode === 13) {    
        var directions = document.getElementById("directions-text");
        directions.textContent = "Choose a letter to guess the word.";
    }
}
document.onkeyup = function(event) {
    var directions = document.getElementById("directions-text");
        directions.textContent = "Choose a letter to guess the word.";
    var dashes = document.getElementById("display-dashes");
        dashes.textContent = blankDisplay.join(" ");
    var letters = document.getElementById("letters-left");
        letters.textContent = "Letters available: " + alphabet.join(" ");
    var guess = event.key.toLowerCase();
    var rightText = document.getElementById("right-text");
    var wrongText = document.getElementById("wrong-text");
    var livesLeft = document.getElementById("lives-left");
    var winCount = document.getElementById("win-count");
    var lossCount = document.getElementById("loss-count");
    var userText = document.getElementById("user-text");
        userText.textContent = "You guessed: " + event.key;  

    if (lettersToGuess.indexOf(guess) >= 0 && event.keyCode !== 13) {
    // Displays chosen letter is correct
        rightText.textContent = "You guessed Correct!";
        wrongText.textContent = "";
    } else if (lettersToGuess.indexOf(guess) < 0 && event.keyCode !== 13) {
    // Displays chosen letter is wrong
        wrongText.textContent = "Wrong, Try Again!";
        rightText.textContent = ""; 
        guessLeft--;
        console.log(guessLeft);
        livesLeft.textContent = guessLeft;       
    }
    
    // Replaces dashes with correct letters guess
    for (j = 0; j < lettersToGuess.length; j++) {
        if (lettersToGuess[j].charAt(0) === guess) {
            blankDisplay.splice(lettersToGuess.indexOf(guess), 1, event.key);
            blankDisplay.splice(lettersToGuess.lastIndexOf(guess), 1, event.key);
            dashes.textContent = blankDisplay.join(" ");       
        }
    }
    console.log(blankDisplay);
    if (blankDisplay.indexOf(guess) > -1) {
        answer.pop();
        console.log(answer);
    }

    // Removes letters as letters are press
    if (alphabet.indexOf(guess) > -1) {
        alphabet.splice(alphabet.indexOf(guess), 1);
        letters.textContent = "Letters available: " + alphabet.join(" ");
    }

    // Game endings
    // Loss Condition
    if (guessLeft <1) {
        console.log(guessLeft);
        lossCount.textContent = losses = losses + 1;
        rightText.textContent = "";
        wrongText.textContent = "You Lose! Try Again!";
        dashes.textContent = lettersToGuess.join(" ");        
        directions.textContent = "";
        userText.textContent = "";
        var audioTwo = document.getElementById("myAudio2");
        audioTwo.play();
        audioTwo.controls = true;
        resetAll();
    } 

    //Win Condition
    if (blankDisplay.join("") === lettersToGuess.join("")) {
        rightText.textContent = "You Win!!!";
        wrongText.textContent = "";
        dashes.textContent = blankDisplay.join(" ");            
        directions.textContent = "Press ENTER to play again!";
        userText.textContent = "";
        winCount.textContent = wins = wins + 1;
        var audio = document.getElementById("myAudio");
        audio.play();
        audio.controls = true;
        resetAll();        
    }
};


function resetAll () {
    let gameWord = oceanWords[Math.floor(Math.random() * oceanWords.length)];
    console.log(gameWord);
    let lettersToGuess = [];
    let blankDisplay = [];
    let answer = [];
        for (i = 0; i < gameWord.length; i++) {
            lettersToGuess.push(gameWord.charAt(i));
            blankDisplay[i] = "_ ";
            blankDisplay.push(gameWord.charAt(i));
            answer.push(gameWord.charAt(i));
        }
        blankDisplay.splice(blankDisplay.length-1,1);
    var dashes = document.getElementById("display-dashes");
        dashes.textContent = blankDisplay.join(" ");
    var letters = document.getElementById("letters-left");
        letters.textContent = "Letters Available: a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var directions = document.getElementById("directions-text");
        directions.textContent = "Press Enter to play again";
    var guess = event.key.toLowerCase();
    var userText = document.getElementById("user-text");
        userText.textContent = "You guessed: " + event.key;    
    var rightText = document.getElementById("right-text");
        rightText.textContent = "";
    var wrongText = document.getElementById("wrong-text");
        wrongText.textContent = "";
    var livesLeft = document.getElementById("lives-left");
        livesLeft.textContent = 6;
    var guessLeft = 6;
    }
 
