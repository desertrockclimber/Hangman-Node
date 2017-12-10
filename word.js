// / Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
//list of letters object
//a boolean that says if word is guessed or not
// var LetterObjects = [];
// var guessed = false;
//display text function
// loop through letterobject array
// for each letterobject get the text
// concatenate text for each letter object
// return concatendated string

// actions methods
// isGuessed methos that returns guessed
// if (secret word.isGuessed) {
// 	gameover}

var Letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd;
	this.lets = []; //letter objects
	this.found = false;

	this.getLets = function() {
		for(var i = 0; i < this.word.length; i++) {
			this.lets.push(new Letter(this.word[i]));
		}
	};

	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		this.found = this.lets.every(function(curLet) {
			return curLet.appear;
		});

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;

		for(var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}

		return whatToReturn;
	};

	this.wordRender = function() {
		var str = '';

		for(var i=0; i < this.lets.length; i++){
			str += this.lets[i].letterRender();
		}

		return str;
	};
}

module.exports = Word;