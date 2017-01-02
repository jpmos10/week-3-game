console.log('javascript is running')

// creating array of words
var wordList = ['hammer', 'drill', 'lumber', 'hammerdrill','level','screw','nail','screwdriver','air compressor'];

var correctGuesses = [],
    compChoice = "",
    wrongGuess = [],
    dashes = 0,
    letters = [],
    wins = 0,
    losses = 0,
    numGuesses = 10,
    playerGuess;



function start() {
    compChoice = wordList[Math.floor(Math.random() * wordList.length)];
    //takes the compChoice word and splits it into its own array
    letters = compChoice.split("");
    dashes = letters.length;


    // Reset Game

    numbGuesses = 10;
    wrongGuess = [];
    correctGuesses = [];
    // inserts the same number of '_' into the wordArray as the compChoice word
    for (var i = 0; i < dashes; i++) {
        correctGuesses.push("_");
    }
    document.getElementById("wordGuess").innerHTML = correctGuesses.join(" ");
    document.getElementById("numGuess").innerHTML = numGuesses;
    document.getElementById("Wins").innerHTML = wins;
    document.getElementById("Losses").innerHTML = losses;




    console.log(correctGuesses);
    console.log(compChoice);
    console.log(letters);
    console.log(dashes);
}

function letterMatches(letter) {
    //is the letter in the compChoice

    var letterInWord = false;

    for (var i = 0; i < dashes; i++) {
        if (compChoice[i] == letter) {
            letterInWord = true

        }
    }

    //where does the letter exist in the word
    if (letterInWord) {
        for (var i = 0; i < dashes; i++) {
            if (compChoice[i] == letter) {
                correctGuesses[i] = letter;
            }
        }

    }

    //letter not in word
    else {
        wrongGuess.push(letter);
        numbGuesses--
    }


    console.log(correctGuesses);


}
function completedRound(){
    console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses Left: " + numbGuesses);

    document.getElementById("wordGuess").innerHTML = correctGuesses.join(" ");
    document.getElementById("numGuess").innerHTML = numbGuesses;
    document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ");

    //user wins
    if (letters.toString() == correctGuesses.toString()) {
        wins++;
        alert("Winner Winner Chicken Dinner!!");

        document.getElementById("Wins").innerHTML = wins;

        start();
    }

    //user loses
    else if (numbGuesses == 0){
        losses++;
        alert("Better Luck Next Time");

        document.getElementById("Losses").innerHTML = losses;

        start();

    }
}





start();



document.onkeyup = function(event) {

        playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        letterMatches(playerGuess);
        completedRound();


        console.log(playerGuess);

    }
    //  function() {
    //      

// //takes the compChoice word and splits it into its own array
//          wordArray = compChoice.split('');

//          // inserts the same number of '_' into the wordArray as the compChoice word
//          wordArray.forEach(function() {
//          dash.push('_');

//        document.querySelector('.dash').innerHTML = dash.join('');



//    document.onkeyup = function(event) {

//     playerGuess = String.fromCharCode(event.keyCode).toLowerCase();     


//      if (wordArray.indexOf (playerGuess) != -1) {

//          for(var i = 0; i < word.length; i++) {
//              if (letter === word[i]) {

//             // if letter is in word, add it to spaces array at appropriate index
//              dash.splice(i, 1, letter);


//           // write to document
//           document.querySelector('.dash').innerHTML = dash.join('');
//      }
