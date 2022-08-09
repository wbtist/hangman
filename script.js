'use strict';

// {Second phase}

// DOM Selectros

const DISPLAY_Secret_Word = document.querySelector('.display-secret-word-blanks-here');
const DISPLAY_image = document.querySelector('.hangman-image');
const alphabetButtons = document.querySelectorAll('button');

// TODO: User can enter secrret word, or randomly generated from an array.

// main scope variables
let life;
let secretWord_ARRAY; // Necessary because I use array methods!!
let blanks_ARRAY;
let secretWord;

// Set up Starting conditons
function setDefaults() {
  life = 6;
  secretWord = 'kilimandzsaro';
  secretWord = secretWord.toUpperCase();
  console.log(secretWord[3]);
  DISPLAY_image.src = `img/stage--6.png`;
  secretWord_ARRAY = [];
  blanks_ARRAY = []; // To display on the DOM
  for (let eachLetter of secretWord) {
    secretWord_ARRAY.push(eachLetter);
    blanks_ARRAY.push('_ ');
  };
  DISPLAY_Secret_Word.textContent = blanks_ARRAY.join('');

};
setDefaults();

// Event Listener for letter button clicks


// What happens if CLICK ON A LETTER BUTTON?
for (let clickedButton of alphabetButtons) {
  clickedButton.addEventListener('click', userClickedALetterButton)
};


function userClickedALetterButton() {
  // get the letter as a string
  let that = this;
  const userGuess = that.textContent;
  console.log(userGuess);
  // Do this if player clicked a letter which is in the secret word
  if (secretWord_ARRAY.includes(userGuess)) {
    secretWord_ARRAY.forEach(function (letter, index) {
      if (userGuess == letter) {
        blanks_ARRAY[index] = letter;
      }
    });
  } else {
    life--;
    if (life != 0) {
      //* This happens if Player still have life left:
      // Display the correspondent life image
      DISPLAY_image.src = `img/stage--${life}.png`;
      //? As life decreasing change BG color, and display sad messages randomly
    } else {
      // remove letter button event listeners
      for (let clickedButton of alphabetButtons) {
        clickedButton.removeEventListener('click', userClickedALetterButton)
      };
      DISPLAY_image.src = `img/stage--${life}.png`
    };
  };


  DISPLAY_Secret_Word.textContent = blanks_ARRAY.join('');
  // hide the clicked letter
  this.classList.add('hidden');
};