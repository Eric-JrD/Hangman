let POSSIBE_WORDS= ["obdurate", "verisimilitude", "defenestrate", "obsequious",
     "dissonant", "toady", "imdempotent"];
let guesses = "";
let word ="";
let MAX_GUESSES=6;
let guessCount = MAX_GUESSES;
let gameOver = false;

function newGame(){
    guesses = "";
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random()*POSSIBE_WORDS.length);
    word = POSSIBE_WORDS[randomIndex];
    
    gameOver = false;
    document.getElementById("message").textContent = "";
    updateScreen();
}

function guess(){
    let input = document.getElementById("guess");
    let letter = input.value;
    let messageArea = document.getElementById("message");

    if(gameOver === true){
        messageArea.textContent = "Game over! Press New Game to Play again!";
        return;
    }

    if(word === ""){
        messageArea.textContent = "Please press New Game before guessing!";
        return;
    }

    if(letter === ""){
        messageArea.textContent = "Please enter a letter!";
        return;
    }

    if( guesses.indexOf(letter) >= 0){
        messageArea.textContent = "You already guessed this letter!";
        input.value = "";
        return;
    }

    messageArea.textContent="";

    if(word.indexOf(letter) < 0){
        guessCount--;
    }
    guesses+=letter;

    input.value = "";

    updateScreen();
}

function updateScreen(){
let clueString="";
    for(let i = 0; i < word.length; i++){
        let letter = word.charAt(i);
        if(guesses.indexOf(letter) >= 0){
            clueString+= letter + " ";
        }
        else{
            clueString+="_ ";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;

    if(guessCount === 0){
        guessArea.textContent = "You Lost!!!! The word was: " + word;
        gameOver = true;
    }

    if(clueString.indexOf("_") === -1){
        guessArea.textContent = "You WONNNN!!!";
        gameOver = true;
    }

    let image = document.getElementById("hangmanpic");
    image.src = "images/hangman" + guessCount + ".gif";
}