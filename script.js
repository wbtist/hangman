'use strict';

// {First phase} See README.md
/*
// Create a secretWord variable
let secretWord = 'kelkaposzta';

// Make an array containing every letter of the secret word
const secretWordLettersArray = secretWord.split("");
let blanksArray = [];

// Make an array with '_'-s times the letters of the secret word characters.
for (let i = 0; i < secretWord.length; i++) {
  blanksArray.push('_');
};

// user guesses a letter
let userGuess = 'a';

// If usrGuess is in secretwordArray, change _ on the same position in blanksArray
for (let i = 0; i < secretWord.length; i++) {
  if (secretWordLettersArray[i] == userGuess) {
    console.log('Good guess')
    blanksArray[i] = userGuess;
    console.log(blanksArray);
  } else {
    console.log('It is not a good guess.')
  }
};
*/
// END of {First phase}

// {Second phase}

// DOM Selectros
let life = 6;
const DISPLAY_Secret_Word = document.querySelector('.display-secret-word-blanks-here');
const DISPLAY_image = document.querySelector('.hangman-image');
DISPLAY_image.src = `img/stage--${life}.png`

let secretWord = 'kilimandzsaro';
secretWord = secretWord.toUpperCase();

let secretWord_ARRAY = [];
let blanks_ARRAY = [];
for (let eachLetter of secretWord) {
  secretWord_ARRAY.push(eachLetter);
  blanks_ARRAY.push('_ ');
};
DISPLAY_Secret_Word.textContent = blanks_ARRAY.join('');



// Event Listener for button clicks
let btns = document.querySelectorAll('button');

for (let clickedButton of btns) {
  clickedButton.addEventListener('click', () => {

    const userGuess = clickedButton.textContent;

    if (secretWord_ARRAY.includes(userGuess)) {
      clickedButton.classList.add('hidden')
      console.log('hide')
    } else {
      life--;
      if (life == 0) {
        DISPLAY_image.src = `img/stage--${life}.png`
        alert('You Are DEAD');
      } else {
        DISPLAY_image.src = `img/stage--${life}.png`
      }
    }
    secretWord_ARRAY.forEach(function (letter, index) {
      if (userGuess == letter) {
        blanks_ARRAY[index] = letter;
      }
    });

    DISPLAY_Secret_Word.textContent = blanks_ARRAY.join('');
  });
};




// function userClickedAButton() {
//   const userGuess = this.textContent;
//   this.classList.add('hidden');

//   secretWord_ARRAY.forEach(function (letter, index) {
//     if (userGuess == letter) {
//       blanks_ARRAY[index] = letter;
//     }
//   });
//   DISPLAY_Secret_Word.textContent = blanks_ARRAY.join('');

// };


