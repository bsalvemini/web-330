'use strict';
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Brandon Salvemini
      Date:   4/9/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById('puzzleBoard');
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}
intList.sort(function () {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement('img');
  piece.src = 'piece' + intList[i] + '.png';
  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = i + 1 - (rowNum - 1) * 8;
  piece.style.top = (rowNum - 1) * 98 + 7 + 'px';
  piece.style.left = (colNum - 1) * 98 + 7 + 'px';
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll('div#puzzleBoard img');

// Iterate through each piece in pieces node list
for (let piece of pieces) {
  // Add event listener to each piece to run the grabPiece() function in response to pointerdown event
  piece.addEventListener('pointerdown', grabPiece);
}

function grabPiece(e) {
  // Set pointerX and pointerY to the values of the clientX and clientY properties of the event object
  pointerX = e.clientX;
  pointerY = e.clientY;

  // Set touch action style of the event target to none
  e.target.touchAction = 'none';

  // Increase zCounter by one and set that value to the zIndex style of the event target
  zCounter++;
  e.target.zIndex = zCounter;

  // Set pieceX and pieceY to the offsetLet and offsetTop properties of the event target
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // Add event listener to run the movePiece() function in response to pointermove event
  e.target.addEventListener('pointermove', movePiece);

  // Add event listener to run the dropPiece() function in response to pointerup event
  e.target.addEventListener('pointerup', dropPiece);
}

function movePiece(e) {
  // Set diffX and diffY to the difference between e.clientX and pointerX
  //  and the difference between e.clientY and pointerY, respectively
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;

  // Set the left and top style properties of the event target
  e.target.style.left = pieceX + diffX + 'px';
  e.target.style.top = pieceY + diffY + 'px';
}

function dropPiece(e) {
  // Remove the event listeners for the pointermove and pointerup events
  e.target.removeEventListener('pointermove', movePiece);
  e.target.removeEventListener('pointerup', dropPiece);
}
