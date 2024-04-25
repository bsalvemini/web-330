'use strict';
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Brandon Salvemini
      Date:   4/23/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById('postalCode');
let place = document.getElementById('place');
let region = document.getElementById('region');
let country = document.getElementById('country');

postalCode.onblur = function () {
  // Get the postal code and country from the page
  let codeValue = document.getElementById('postalCode').value;
  let countryValue = document.getElementById('country').value;

  // Clear the place and region text boxes
  place.value = '';
  region.value = '';

  // Request the information for the country and postal code from the Zippopotam API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    // Parse the JSON response object
    .then((response) => response.json())
    // Set the value of the place and region text boxes
    //  from the data returned from the Zippopotam API
    .then((json) => {
      place.value = json.places[0]['place name'];
      region.value = json.places[0]['state abbreviation'];
    })
    // Catch any errors and write them to the console.
    .catch((error) => console.log(error));
};
