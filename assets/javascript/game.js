// Computer needs to choose band name from Array of bands
// user needs to guess letter of band name
// capture input of guesses from user
// While guesses are less than 20
//  display guesses in order of bandname Array
//  update decreasing guess count 
//  once guess count is diminished display loss,
//  otherwise display WIN once array has been met with guesses

var bandArray = ["WEEN","BUDOS","PRINCE","DOORS"];

var getBand = bandArray[Math.floor(Math.random() * bandArray.length)];
  console.log(getBand);

var bandString = getBand.split("");
var blanks = bandString.map(a=>'_');
var guessCount = 20;
var guessed = [];


document.onkeyup = function(event) {
  var userGuess = event.key.toUpperCase();

  console.log(userGuess); 
  
  if(/^[a-zA-Z]+$/.test(userGuess)){
  

  var index = bandString.indexOf(userGuess) 
  while (index >-1) {
    console.log("it's a letter!");    
      blanks[index]=userGuess; 
      index = bandString.indexOf(userGuess, index+1); 
  } 

  // else {
  //   console.log("Not a letter");
  // }

  document.querySelector('#blanks').innerHTML = blanks.join(" ");

  guessed.push(userGuess);
  console.log(guessed);
  document.querySelector('#used').innerHTML = guessed.join(String.fromCharCode(userGuess));


  guessCount--;
  document.querySelector("#guessCount").innerHTML = guessCount;
  if (guessCount == 0) {
    var loser = "you lost"
    document.querySelector('body').innerHTML = loser;
  }
}
}