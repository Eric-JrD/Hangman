let POSSIBE_WORDS= ["obdurate", "verisimilitude", "defenestrate", "obsequious",
     "dissonant", "toady", "imdempotent"];

function newGame(){
    let randomIndex = parseInt(Math.random()*POSSIBE_WORDS.length);
    let word = POSSIBE_WORDS[randomIndex];
    let clueString="";
    for(let i = 0; i < word.length; i++){
        clueString+="_ ";
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
