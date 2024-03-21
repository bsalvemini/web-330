'use strict';
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Brandon Salvemini
      Date:   3/19/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for timer
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// timer runPause() method prototype
timer.prototype.runPause = function (timer, minBox, secBox) {
  // If timeID is true
  if (this.timeID) {
    // Pause the timer by clearing the interval using the timeID
    window.clearInterval(this.timeID);

    // Set timeID to null
    this.timeID = null;
  } else {
    // Start timer using the window.setInterval() method to run the countdown function every 1000 millseconds
    // set it equal to timeID
    this.timeID = window.setInterval(function () {
      countdown(timer, minBox, secBox);
    }, 1000);
  }
};

// countdown function
function countdown(timer, minBox, secBox) {
  // if timer.seconds is greater than 0
  if (timer.seconds > 0) {
    // Decrease timer.seconds by one
    timer.seconds -= 1;
  } else if (timer.minutes > 0) {
    // if timer.minutes is greater than 0
    // Decrease timer.minutes by one and set timer.seconds to 59
    timer.minutes -= 1;
    timer.seconds = 59;
  } else if ((timer.minutes === 0) & (timer.seconds === 0)) {
    // If timer.minutes is equal to zero and timer.seconds is equal to zero
    // Clear interval using timer.timeID and set timer.timeID to null
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  // Update the value of minBox with the current minute value
  minBox.value = timer.minutes;

  // Update the value of secBox with the current second value
  secBox.value = timer.seconds;
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');

// Declare a new instance of the timer object class
let myTimer = new timer(minBox.value, secBox.value);

// Update the minutes value of the myTimer object when the value of minBox changes
minBox.onchange = function () {
  myTimer.minutes = minBox.value;
};

// Update the seconds value of the myTimer object when the value of secBox changes
secBox.onchange = function () {
  myTimer.seconds = secBox.value;
};

// Run the runPause method when the runPause timer button is clicked
runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
