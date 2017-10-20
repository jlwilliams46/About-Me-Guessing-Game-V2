'use strict';

var correctAnswers = 0;
// introducion
var user = prompt('Welcome! What is your name?');
console.log('User:', user);

// first question
var season = prompt('Jamie\'s favorite season is Fall?\n(Please answer "y" for Yes and "n" for No)');
console.log('Jamie\'s favorite season:', season);

// validation...response if answer is correct
if(season.toLowerCase() === 'y') {
  alert('Correct!');
  correctAnswers++;

// validation...response if answer is incorrect
}else{
  alert('Incorrect!');
}

// second question
var swim = prompt('Can Jamie swim?\n(Please answer "y" for Yes and "n" for No)');
console.log('Can Jamie swim:', swim);

// validation...response if answer is correct
if(swim.toLowerCase() === 'n') {
  alert('Correct!');
  correctAnswers++;

// validation...response if answer is incorrect
}else{
  alert('Incorrect!');
}

// third question
var seether = prompt('Has Jamie ever seen the band Seether live?\n(Please answer "y" for Yes and "n" for No)');
console.log('Has Jamie seen Seether live:', seether);

// validation...response if answer is correct
if(seether.toLowerCase() === 'y') {
  alert('Correct!');
  correctAnswers++;

// validation...response if answer is incorrect
}else{
  alert('Incorrect!');
}

// fourth question
var cat = prompt('Does Jamie own a cat?');
console.log('Does Jamie own a cat:', cat);

// validation...response if answer is correct
if(cat.toLowerCase() === 'n') {
  alert('Correct!');
  correctAnswers++;

// validation...response if answer is incorrect
}else{
  alert('Incorrect!');
}

// fifth question
var sing = prompt('Can Jamie Sing?\n(Please answer "y" for Yes and "n" for No)');
console.log('Can Jamie Sing?:', sing);

// validation...response if answer is correct
if(sing.toLowerCase() === 'y') {
  alert('Correct!');
  correctAnswers++;

// validation...response if answer is incorrect
}else{
  alert('Incorrect!');
}

// sixth question
var pokemon = prompt('How many Pokémon did Jamie catch yesterday?\n(Please enter a number)');
console.log('Number of Pokémon:', pokemon);

while (parseInt(pokemon) !== 7) {
  alert('Incorrect! Try Again');
  pokemon = prompt('How many Pokémon did Jamie catch yesterday?\n(Please enter a number)');
  console.log('Number of Pokémon:', pokemon);
}
alert('Correct!');
correctAnswers++;

// seventh question'
var states = ['Indiana', 'Georgia', 'North Carolina', 'Maryland', 'Virgina', 'Missouri', 'Alabama', 'Kentucky'];
var guess = prompt('Guess which states I\'ve lived in other than Washington.\n(You have maximum of 6 tries.)');
var flag;


for (var i = 0; i <= 4; i++) {
  console.log('States Guessed:', guess);

  if(guess !== states[i]) {
    prompt('Incorrect! Guess which states I\'ve lived in other than Washington.');
  }

  if(guess === states[i]) {
    alert('Correct! Jamie has lived in the following states: ' + states[0] + ', ' + states[1] + ', ' + states[2] + ', ' + states[3] + ', ' + states[4]) + ', ' + states[5] + ', ' + states[6]; + ', and ' + states[7] + '.';
    flag = true; // set flag equal to true
    correctAnswers++;
    break; // exits loop once condition is met
  }
}

// only runs if false
if(!flag) {
  alert('You are out of guesses! Jamie has lived in the following states: ' + states);
}
alert('You got ' + correctAnswers + ' out of 7!');
