# Hangman Game By Istvan Toth

## The classic game (re)created by me :)

## DevLog / How I developed this web application:

### 1. _{First phase}_ I made sure that the core game functionality is working fine

**The code**

```javascript
"use strict";

// Create a secretWord variable
let secretWord = "kelkaposzta";

// Make an array containing every letter of the secret word
const secretWordLettersArray = secretWord.split("");
let blanksArray = [];

// Make an array with '_'-s times the letters of the secret word characters.
for (let i = 0; i < secretWord.length; i++) {
  blanksArray.push("_");
}

// user guesses a letter
let userGuess = "a";

// If usrGuess is in secretwordArray, change \_ on the same position in blanksArray
for (let i = 0; i < secretWord.length; i++) {
  if (secretWordLettersArray[i] == userGuess) {
    console.log("Good guess");
    blanksArray[i] = userGuess;
    console.log(blanksArray);
  } else {
    console.log("It is not a good guess.");
  }
}
```

> ### ℹ️ **Meanwhile...**
>
> ### I learned how to edit Markdown files. 😊
>
> This Vscode extension is great to do the job:\
> [GitHub Markdown Preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview)
