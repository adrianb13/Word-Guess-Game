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
    var guessLeft = [6];
    var winCount = document.getElementById("win-count");
    var wins = 0;
    var lossCount = document.getElementById("loss-count");
    var losses = 0;


    if (lettersToGuess.indexOf(guess) > -1) {
    // Displays chosen letter is correct
            rightText.textContent = "You guessed Correct!";
            wrongText.textContent = "";
    } else {
    // Displays chosen letter is wrong
            wrongText.textContent = "Wrong, Try Again!";
            rightText.textContent = ""; 
    }

    // Replaces dashes with correct letters guess
    for (j = 0; j < lettersToGuess.length; j++) {
    if (lettersToGuess[j].charAt(0) === guess) {
        blankDisplay.splice(lettersToGuess.indexOf(guess), 1, event.key);
        blankDisplay.splice(lettersToGuess.lastIndexOf(guess), 1, event.key);
        dashes.textContent = blankDisplay.join(" ");
        }
    }

    // Removes letters as letters are press
    if (alphabet.indexOf(guess) > -1) {
        alphabet.splice(alphabet.indexOf(guess), 1);
        letters.textContent = "Letters available: " + alphabet.join(" ");
    }
//
    if (answer.indexOf(guess) > -1); {
        console.log(lettersToGuess.indexOf(guess));
        answer.splice(answer.indexOf(guess), 1);
        console.log(answer);
    }

    // Game endings
    // Math to get guesses left: 
    var diff = 26 - answer.length; //(right letter guessed)
    console.log(diff);
    var diff2 = alphabet.length - answer.length; //(wrong letter guessed)
    console.log(diff2);
    var miss = diff - diff2; //(guess deductor)
    console.log(miss);
    var guessLeft = 6 - ((26 - answer.length) - (alphabet.length - answer.length));
    console.log(guessLeft);

    // Loss Condition
    if (lettersToGuess.indexOf(guess) < 0) {
        var guessesLeft = document.getElementById("guesses-left");
        guessesLeft.textContent = guessLeft;
        if (guessLeft < 1) {
            lossCount.textContent = losses = losses + 1;
            rightText.textContent = "";
            wrongText.textContent = "You Lose! Try Again!";
            dashes.textContent = lettersToGuess.join(" ");        
            directionsText.textContent = "";
            userText.textContent = "";
            var audioTwo = document.getElementById("myAudio2");
            audioTwo.play();
            audioTwo.controls = true;
            //document.onkeyup = resetAll(event.key);
        }
    } 

    //Win Condition
    if (blankDisplay.join("") === lettersToGuess.join("")) {
        rightText.textContent = "You Win!!!";
        wrongText.textContent = "";
        dashes.textContent = blankDisplay.join(" ");            
        directionsText.textContent = "";
        userText.textContent = "";
        winCount.textContent = wins = wins + 1;
        var audio = document.getElementById("myAudio");
        audio.play();
        audio.controls = true;
    }
};

/*     resetAll();
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
    var dashes = document.getElementById("display-dashes");
        dashes.textContent = blankDisplay.join(" ");
    var letters = document.getElementById("letters-left");
        letters.textContent = "Letters Available: a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var directionsText = document.getElementById("directions-text");
        directionsText.textContent = "Choose a letter to guess the word.";
    var guess = event.key.toLowerCase();
    var userText = document.getElementById("user-text");
        userText.textContent = "You guessed: " + event.key;    
    var rightText = document.getElementById("right-text");
        rightText.textContent = "";
    var wrongText = document.getElementById("wrong-text");
        wrongText.textContent = "";
    var guessesLeft = document.getElementById("guesses-left");
        guessesLeft.textContent = 6;
    var guessLeft = [6];
    }
 */
