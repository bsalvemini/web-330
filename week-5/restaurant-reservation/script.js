'use strict';
/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Brandon Salvemini
  Date: 4/16/2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: true },
  { tableNumber: 2, capacity: 6, isReserved: false },
  { tableNumber: 3, capacity: 8, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 10, isReserved: true },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // If the table is not reserved
  if (!tables[tableNumber].isReserved) {
    // Table is available

    // Update table availability
    tables[tableNumber].isReserved = true;

    // Run the callback function after the amount of milliseconds passed in the time parameter
    setTimeout(() => {
      callback(`Table ${tables[tableNumber].tableNumber} has been reserved.`);
    }, time);
  } else {
    // Table is not available

    // Run the callback function immediately
    callback(
      `Sorry, Table ${tables[tableNumber].tableNumber} has already been reserved.`
    );
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById('reservationForm')
  .addEventListener('submit', function (e) {
    // Prevent browser from submitting form
    e.preventDefault();

    // Get the table number from the form
    let tableNumber = document.getElementById('tableNumber').value;

    // Name was not retrieved as it is never used

    // If the table number entered is greater than the
    //  total number of tables or less than one
    if (tableNumber > tables.length || tableNumber < 1) {
      // Show message on the page
      showMessage('Invalid table number entered');
    } else {
      // Attempt to reserve table
      // 1 is subtracted from the table number so that it matches up with the
      //  corresponding table index in the tables array
      reserveTable(tableNumber - 1, showMessage, 3000);
    }
  });

// Function to show message on page
// This is the callback function
function showMessage(msg) {
  // Get the element with the ID message and set it's textContent
  //  to the passed in message
  document.getElementById('message').textContent = msg;
}
