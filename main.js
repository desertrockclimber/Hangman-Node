// The completed game should meet the following criteria:

// The completed game should be able to receive user input using the inquirer or prompt npm packages.
// Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:

// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
// Each constructor function should be in it's own file and be exported and required wherever needed.
// Look into function prototypes and use them for a few of your constructor's methods.
var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./word.js');
	console.log("");
	console.log("");
	console.log("");
	console.log("=============================================================================");
	console.log("   This is Hangman Node-ified! Win the game by guessing all the correct letters for the word.");
	console.log("=============================================================================");
	console.log("   Hint.....National Parks");
	console.log("=============================================================================");
	console.log("   You have 10 guesses.");
	console.log("=============================================================================");
	console.log("");
	console.log("");

	
	



prompt.start();

game = {
	wordList : ["zion", "arches", "bryce", "canyonlands", "yellowstone", "yosemite"],
	wordsWon : 0,
	guessesRemaining : 10, 
	currentWrd : null, 
	startGame : function (wrd){
		
		this.resetGuessesRemaining();

		this.currentWrd = new Word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);

		this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters

		this.keepPromptingUser();

	},
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);

		    console.log(result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if (findHowManyOfUserGuess == 0){
		    	console.log('Wrong guess. Try again.');
		    	console.log(" ");
		    	self.guessesRemaining--;
		    }else{
		    	console.log('Good guess.');
		    	console.log(" ");

		    	//check if you win only when you are right
	    		if(self.currentWrd.didWeFindTheWord()){
			    	console.log('Nice job. You won. Go get yourself a Mt Dew.');
			    	return; //end game
			    }
		    }
		    console.log(" ");
		    console.log(" ");
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('Game over. The correct word was:  ', self.currentWrd.word);
		    	
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}


};

game.startGame();