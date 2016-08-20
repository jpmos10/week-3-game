
//creating array of words
var wordList =['hammer','drill','lumber','contractor'];





var playerGuesses = [],
	dash = [],
    wordArray,
    compChoice,
    wins = 0,
    losses = 0,
    playerGuesses,
    numbGuesses,
    compChoice,
    wordList;
    


game = {

//creating array of words
    wordList:['hammer','drill','stud','contractor'],

int: function() {
    compChoice = wordList[Math.floor(Math.random() * wordList.length)]

//takes the compChoice word and splits it into its own array
         wordArray = compChoice.split('');

         // inserts the same number of '_' into the wordArray as the compChoice word
         wordArray.forEach(function() {
         dash.push('_');

       document.querySelector('.dash').innerHTML = dash.join('');



   document.onkeyup = function(event) {

	   playerGuess = String.fromCharCode(event.keyCode).toLowerCase();     
    

    	if (wordArray.indexOf (playerGuess) != -1) {

    		for(var i = 0; i < word.length; i++) {
             if (letter === word[i]) {
          
            // if letter is in word, add it to spaces array at appropriate index
             dash.splice(i, 1, letter);
          
          
          // write to document
          document.querySelector('.dash').innerHTML = dash.join('');
    	}
    


  


   

