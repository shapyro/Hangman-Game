// Computer needs to choose band name from Array of bands
// user needs to guess letter of band name
// capture input of guesses from user
// While guesses are less than 20
//  display guesses in order of bandname Array
//  update decreasing guess count 
//  once guess count is diminished display loss,
//  otherwise display WIN once array has been met with guesses

var bandArray = ["WEEN","Budos","Prince","Doors"];
var wins = 0;
var guessCount = 20;
var startValue = 0;


var getBand = bandArray[Math.floor(Math.random() * bandArray.length)];
console.log(getBand);

var bandString = getBand.split("");
// var blanks = bandName.map(a=>'_');
var blanks = bandString.map(function(a) {
  return '_';
})

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess); 

  while (getBand.indexOf(userGuess, startValue) !== -1) {
    startValue = getBand.indexOf(userGuess, startValue) + 1;
    if (userGuess.indexOf(bandString)) {
      console.log("it's a letter!");
    }
    else {
      console.log("Not a letter");
    }
  }
  }
 






