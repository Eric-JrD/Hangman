let POSSIBE_WORDS= ["obdurate", "verisimilitude", "defenestrate", "obsequious",
     "dissonant", "toady", "imdempotent"];
let guesses = "";
let word ="";
function newGame(){
    let randomIndex = parseInt(Math.random()*POSSIBE_WORDS.length);
    word = POSSIBE_WORDS[randomIndex];
    updateScreen();
}

function guess(){
    let input = document.getElementById("guess");
    let letter = input.value;
    guesses+=letter;
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
}