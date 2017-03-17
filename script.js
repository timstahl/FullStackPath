var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");

if (parseInt(guess) === randomNumber ) {
  document.write("You guessed it.");
} else {
  document.write("Sorry. The number was " + randomNumber );
}