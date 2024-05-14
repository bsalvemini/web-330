'use strict';
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Brandon Salvemini
      Date:   5/9/2024

      Filename: project12-03.js
*/

// Select the article h2 elements and add a click event
$('article > h2').click((e) => {
  // Variable for event target
  let heading = $(e.target);

  // Variable referencing the next sibling element of the heading
  let list = $(heading.next());

  // Variable referencing the children of the heading variable that have the tag name img
  let headingImage = $(heading.children('img'));

  // Alternate between showing and hiding the content with a half-second delay
  $(list).slideToggle(500);

  // If the heading image's src attribute is 'plus.png'
  if ($(headingImage).attr('src') === 'plus.png') {
    // The heading image's src attribute is 'plus.png'

    // Set the heading image's src attribute to 'minus.png'
    $(headingImage).attr('src', 'minus.png');
  } else {
    // The heading image's src attribute is not 'plus.png'

    // Set the heading image's src attribute to 'plus.png'
    $(headingImage).attr('src', 'plus.png');
  }
});
