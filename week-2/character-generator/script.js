/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Brandon Salvemini
  Date: 3/27/2024
  Filename: script.js
*/

'use strict';

// Function to create character
function createCharacter(name, gender, characterClass) {
 // functions to return the name, gender, and class of the character
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    },
  };
}

// Click event handler for Generate Hero button on form
document.getElementById('generateHero').addEventListener('click', function (e) {
  e.preventDefault();

  // Get form values
  let heroName = document.forms.characterForm[0].value;
  let heroGender = document.forms.characterForm[1].value;
  let heroClass = document.forms.characterForm[2].value;

  // Create character
  let newCharacter = createCharacter(heroName, heroGender, heroClass);

  // Display character information, capitalizing gender and class name
  document.getElementById('characterName').innerText =
    'Name: ' + newCharacter.getName();
  document.getElementById('characterGender').innerText =
    'Gender: ' + capitalize(newCharacter.getGender());
  document.getElementById('characterClass').innerText =
    'Class: ' + capitalize(newCharacter.getClass());
});

/*
  This function was inspired by the code at the bottom of the following article:
  https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
  The function didn't come directly from the article but it does use code from it
  This function was created so I could capitalize the gender and class on the page
*/
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
