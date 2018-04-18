var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessButton = document.querySelector('.guess-button');
var guessValue = document.querySelector('#guessValue');
var userGuess = document.querySelector('.guessInput');
var resetButton = document.querySelector('#reset-button');
var guessCount = 0;

console.log('random Number '+ randomNumber);

userGuess.addEventListener('keyup', enableButtons);
resetButton.addEventListener('click', resetButtonFunction);
guessButton.addEventListener('click', function () {
  var parsedGuess = parseInt(userGuess.value);
  var min = 0;
  var max = 100;
  guessValue.innerHTML=parsedGuess;

  if (parsedGuess > max ) {  
    document.querySelector('#rangeReply').innerHTML=("Enter a number smaller than " + max); 

  } else if (parsedGuess < min) {
    document.querySelector('#rangeReply').innerHTML=("Enter a number larger than " + min); 

  } else if ((parsedGuess  <= max) && (parsedGuess >= min)){
    document.querySelector('#rangeReply').innerHTML=("That's in range.");

  } else {
    document.querySelector('#rangeReply').innerHTML=("Not a number"); 
  }

  document.querySelector('#guessValue').innerHTML=parsedGuess;
  guessCount++;

  if (parsedGuess === randomNumber) {
    document.querySelector('#lowOrHi').innerHTML='BOOM goes the dynamite!! Guesses = ' + guessCount;

  } else if (parsedGuess > randomNumber) {
    document.querySelector('#lowOrHi').innerHTML='Too high';

  } else if (parsedGuess < randomNumber){
    document.querySelector('#lowOrHi').innerHTML='Too low';

  } else {
    document.querySelector('#lowOrHi').innerHTML='Error: Try a number';
  }
});

function enableButtons(){
  document.querySelector('#guess-button').disabled = false;
  document.querySelector('#clear-button').disabled = false;
  document.querySelector('#reset-button').disabled = false;
}

function resetButtonFunction(event) {
  event.preventDefault();   
  // location.reload(true);
  document.querySelector('#lowOrHi').textContent = " ";
  // document.querySelector('#userGuess').textContent = " ";
  document.querySelector('#reset-button').disabled = true;
}

  