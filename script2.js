var $randonNumber = Math.floor(Math.random() * 100) +1;
var $guessButton = $('.guess-button');
var $guessValue = $('#guess-value');
var $userGuess = $('.user-guess');
var $resetButton = $('#reset-button');
var $clearButton = $('#clear-button');
var $lowOrHi = $('#lowOrHi');
var $rangeReply = $('#rangeReply');
var guessCount = 0;

// eventlistners
$userGuess.on('keyup', enableButtons);
$resetButton.on('click', ResetButtonActivate);
$guessButton.on('click', checkIt ());
$clearButton.on('click', ClearFields())

function checkit () {
  var min = 0;
  var max= 100;
  var parsedGuess = parseInt($userGuess.val());
  $guessValue.html = parsedGuess;

  if (parsedGuess > max) {
    $rangeReply.html = ('Enter a number smaller then ' + max);
  } else if (parsedGuess < min) {
      $rangeReply.html = ('Enter a number larger then ' + min);
  } else if (parsedGuess <= max) && (parsedGuess >= min) {
      $rangeReply.html = ('That is in range!');
  }  else {
      $rangeReply.html = ('That is not a number');
    }
  }
  $guessValue.html=parsedGuess;
  guessCount++;

  if (parsedGuess === randonNumber) {
    $lowOrHi.html=('Boom goes the dynamite!!!');
  } else if (parsedGuess > randonNumber) {
    $lowOrHi.html=('Too high!');
    } else if (parsedGuess < randonNumber) {
      $lowOrHi.html=('Too low');
    } else {
      $lowOrHi.html=('Not a number!');
    }
  }
};

function enableButton (){
  $guessValue.disabled = false;
  $clearButton.disabled = false;
  $resetButton.disabled = false;
};

function ResetButtonActivate (event){
  event.preventDefault();
  $lowOrHi.text = '';
  $resetButton.disabled = true;
};

function clearFields (){

};

