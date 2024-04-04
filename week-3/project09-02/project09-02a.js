'use strict';
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Brandon Salvemini
      Date:   4/2/2023

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById('riderName');
let ageGroup = document.getElementById('ageGroup');
let bikeOption = document.getElementById('bikeOption');
let routeOption = document.getElementById('routeOption');
let accOption = document.getElementById('accOption');
let region = document.getElementById('region');
let miles = document.getElementById('miles');
let comments = document.getElementById('comments');

// Run the showData function then the submit button is clicked
document.getElementById('submitButton').onclick = showData;

// Function to save form data to session storage then go to project09-02b.html
function showData() {
  console.log(riderName.value);
  console.log(ageGroup.value);

  // Store form values in session storage
  sessionStorage.setItem('riderName', riderName.value);
  sessionStorage.setItem('ageGroup', ageGroup.value);
  sessionStorage.setItem('bikeOption', bikeOption.value);
  sessionStorage.setItem('routeOption', routeOption.value);
  sessionStorage.setItem('accOption', accOption.value);
  sessionStorage.setItem('region', region.value);
  sessionStorage.setItem('miles', miles.value);
  sessionStorage.setItem('comments', comments.value);

  // Change location to project09-02b.html
  location.href = 'project09-02b.html';
}
