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

// var game = {
//   guessed: [],
//   guessCount: 20,

// var game = {
//   guessed: [],
//   guessCount: 20,
//   wins: 0,
//   startValue: 0
// }

//function(stringBand) {
  var bandString = getBand.split("");
  var blanks = bandString.map(a=>'_');
  var blanksArray = [];
  var guessCount = 20;
  var guessed = [];

  var blanks_span = "<span>" + blanks + "<span>";

  document.querySelector('#blanks').innerHTML = blanks_span;
  //document.querySelector('#blanks').innerHTML = bandString.map(a=>'_');

  document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase(); //String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess); 
    var startValue = 0;

    // // update letters and fill blanks
    // while (getBand.indexOf(userGuess, startValue) !== -1) {
    // //blanks[bandString.indexOf(userGuess, startValue)].push(guessed);
    //   startValue = getBand.indexOf(userGuess, startValue) + 1;
    // //   //document.querySelector('#letters').innerHTML = guessed.push(" " + userGuess);
    // //   //document.querySelector('#used').innerHTML = guessed.push(String.fromCharCode(userGuess));
    // guessCount -1;
    // console.log(guessCount)


    //replace dash with letter
    // for (i=0; i<bandString.length; i++) {
    //   console.log(guessCount);
      

      if (bandString.indexOf(userGuess) > -1) {
        console.log("it's a letter!");
        document.querySelector('#used').innerHTML = guessed.push(String.fromCharCode(userGuess));

        //console.log(userGuess);
      } 
      else {
        console.log("Not a letter");
        guessed.push(userGuess);
        //console.log(userGuess);
      }
    }








