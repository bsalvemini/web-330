/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Brandon Salvemini
  Date: 4/24/2024
  Filename: script.js
*/

'use strict';

// Array to hold hero objects
let heroes = [
  {
    name: 'Batman',
    superpower: 'Marital Arts',
    weakness: 'Lacks superhuman abilities',
    city: 'Gotham City',
  },
  {
    name: 'Green Lantern',
    superpower: 'Force field',
    weakness: 'Mortal vulnerability',
    city: 'Coast City',
  },
  {
    name: 'Wonder Woman',
    superpower: 'Super strength',
    weakness: 'Lasso of Truth',
    city: 'Gateway City',
  },
];

// The if (Math.random() < 0.8) used in these functions means that the promise
//  will resolve 80% of the time. This is on page 464 of JavaScript for Web Warriors

// Batman
function fetchHero1() {
  return new Promise((resolve, reject) => {
    // Run the code after 2 seconds
    setTimeout(() => {
      if (Math.random() < 0.8) {
        // Return the first hero object
        resolve(heroes[0]);
      } else {
        // Reject promise with message
        reject('Unable to retrieve information for Batman');
      }
    }, 2000);
  });
}

// Green Lantern
function fetchHero2() {
  return new Promise((resolve, reject) => {
    // Run the code after 2.5 seconds
    setTimeout(() => {
      if (Math.random() < 0.8) {
        // Return the second hero object
        resolve(heroes[1]);
      } else {
        // Reject promise with message
        reject('Unable to retrieve information for Green Lantern');
      }
    }, 2500);
  });
}

// Wonder Woman
function fetchHero3() {
  return new Promise((resolve, reject) => {
    // Run the code after 3 seconds
    setTimeout(() => {
      if (Math.random() < 0.8) {
        // Return the third hero object
        resolve(heroes[2]);
      } else {
        // Reject promise with message
        reject('Unable to retrieve information for Wonder Woman');
      }
    }, 3000);
  });
}

// Run all the promises concurrently and wait for them to finish
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()]).then(
  (results) => {
    // Loop through the results of each promise
    results.forEach((result) => {
      // If the promise fulfilled
      if (result.status === 'fulfilled') {
        // Set currentHero the hero object returned from the promise
        let currentHero = result.value;

        // Switch statement to populate the appropriate div for each hero based
        //  on the name of the current hero
        switch (currentHero.name) {
          case 'Batman':
            // Populate hero1Div child elements with Batman's information
            let hero1Div = document.getElementById('hero1');
            hero1Div.children['heroName'].innerText = currentHero.name;
            hero1Div.children[
              'heroSuperpower'
            ].innerText = `Superpower: ${currentHero.superpower}`;
            hero1Div.children[
              'heroWeakness'
            ].innerText = `Weakness: ${currentHero.weakness}`;
            hero1Div.children[
              'heroCity'
            ].innerText = `City: ${currentHero.city}`;

            // break so execution does not fall through
            break;

          case 'Green Lantern':
            // Populate hero2Div child elements with Green Lantern's information
            let hero2Div = document.getElementById('hero2');
            hero2Div.children['heroName'].innerText = currentHero.name;
            hero2Div.children[
              'heroSuperpower'
            ].innerText = `Superpower: ${currentHero.superpower}`;
            hero2Div.children[
              'heroWeakness'
            ].innerText = `Weakness: ${currentHero.weakness}`;
            hero2Div.children[
              'heroCity'
            ].innerText = `City: ${currentHero.city}`;

            // break so execution does not fall through
            break;

          case 'Wonder Woman':
            // Populate hero3Div child elements with Wonder Woman's information
            let hero3Div = document.getElementById('hero3');
            hero3Div.children['heroName'].innerText = currentHero.name;
            hero3Div.children[
              'heroSuperpower'
            ].innerText = `Superpower: ${currentHero.superpower}`;

            // break so execution does not fall through
            hero3Div.children[
              'heroWeakness'
            ].innerText = `Weakness: ${currentHero.weakness}`;
            hero3Div.children[
              'heroCity'
            ].innerText = `City: ${currentHero.city}`;
            break;

          default:
            break;
        }
      } else {
        // Promise was rejected

        // if the result text includes "Batman"
        if (result.reason.includes('Batman')) {
          // Populate the element with the ID "heroError" in the hero1 div to the result reason text
          document.getElementById('hero1').children['heroError'].innerText =
            result.reason;

          // if the result text includes "Green Lantern"
        } else if (result.reason.includes('Green Lantern')) {
          // Populate the element with the ID "heroError" in the hero2 div to the result reason text
          document.getElementById('hero2').children['heroError'].innerText =
            result.reason;

          // if the result text includes "Wonder Woman"
        } else if (result.reason.includes('Wonder Woman')) {
          // Populate the element with the ID "heroError" in the hero3 div to the result reason text
          document.getElementById('hero3').children['heroError'].innerText =
            result.reason;
        }
      }
    });
  }
);
