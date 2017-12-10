// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

//  function Letter(letterInFunction) {
//     //make a character property and set it to what you think makes sense
//     this.character = letterInFunction;

//     //make an appear property and set it to what makes sense
//     this.appear = false;

//     //make a chooseCharacterToDisplay property and set it to a function that does what you think makes sense
//     this.chooseCharacterToDisplay = function(){
//         return !(this.appear) ? "_" : this.character;

// exports.Letter = Letter;


var Letter = function(let) {
  this.charac = let;

  	this.appear = false;

  	this.letterRender = function() {
  		//if appear is false then show the _
  		//else appear is true then show character
  		return !(this.appear) ? " _ " : this.charac;
  	};
};

module.exports = Letter;