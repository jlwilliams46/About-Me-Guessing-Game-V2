'use strict';

var correctcounters = 0
// introducion
var user = prompt('Welcome! What is your name?');
console.log('User:', user);

// first question
var season = prompt('Jamie\'s favorite season is Fall?\n(Please answer "y" for Yes and "n" for No)');
console.log('Jamie\'s favorite season:', season);

// validation...response if answer is correct
if(season.toLowerCase() === 'y') {
  alert('Correct!');
  correctcounters++;

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
  correctcounters++;
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
  correctcounters++;
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
  correctcounters++;
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
  correctcounters++;
// validation...response if answer is incorrect
}else{
  alert('Incorrect!');
}

// sixth question
var pokemon = prompt('How many Pokémon did Jamie catch yesterday?\n(Please enter a number)');
console.log('Number of Pokémon:', pokemon);

while (pokemon !== 7) {  //Found your issue Jamie. You have an infinite loop <3
  alert('Incorrect! Try Again');
  pokemon = prompt('How many Pokémon did Jamie catch yesterday?\n(Please enter a number)');
  console.log('Number of Pokémon:', pokemon);
}
alert('Correct!');
correctcounters++;

alert('you got ' +   correctcounters + ' out of 7');
