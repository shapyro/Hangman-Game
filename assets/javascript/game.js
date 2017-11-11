//The Band Array
//computer picks a band, strings a band, and makes blanks of bandwidth
//variables for counting down guesses and pushing guess chars

var bandArray = ["WEEN","BUDOS","PRINCE","DOORS"];
var getBand = bandArray[Math.floor(Math.random() * bandArray.length)];
var bandString = getBand.split("");
var blanks = bandString.map(a=>'_');
var guessCount = 20;
var guessed = [];

//player1, pick a letter
//letter to upper case to match array
//letter is indeed a letter because regex
document.onkeyup = function(event) {
  var userGuess = event.key.toUpperCase();
  
  if(/^[a-zA-Z]+$/.test(userGuess)){
    
    //index used to update blanks with letters
    var index = bandString.indexOf(userGuess);
    
    while (index >-1) {  
      blanks[index]=userGuess; 
      index = bandString.indexOf(userGuess, index+1); 
      document.querySelector('#blanks').innerHTML = blanks.join(" ");
    } 

    guessed.push(userGuess);
    document.querySelector('#used').innerHTML = guessed.join(String.fromCharCode(userGuess));

    guessCount--;
    document.querySelector("#guessCount").innerHTML = guessCount;
    if (guessCount == 0) {
      var loser = "you lost"
      document.querySelector('body').innerHTML = loser;
    } 
  }
}

