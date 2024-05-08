/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Brandon Salvemini
  Date: 5/6/2024
  Filename: script.js
*/

'use strict';

const movies = [
  // Add your movie objects here
  // Movies were randomly picked using this site: https://randommer.io/random-movies
  // Directors and synopsis were obtained from the each movie's IMDB page
  {
    title: 'Sabotage',
    director: 'David Ayer',
    releaseYear: '2014',
    synopsis:
      'Members of an elite DEA task force find themselves being taken down one by one after they rob a drug cartel safe house.',
  },
  {
    title: '10x10',
    director: 'Suzi Ewing',
    releaseYear: '2018',
    synopsis:
      'A man abducts a flower shop owner and holds her captive in a small, soundproof room in an effort to extract a dark secret from her past.',
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    director: 'Milos Forman',
    releaseYear: '1975',
    synopsis:
      'In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.',
  },
  {
    title: 'Solaris',
    director: 'Steven Soderbergh',
    releaseYear: '2002',
    synopsis:
      'A troubled psychologist is sent to investigate the crew of an isolated research station orbiting a bizarre planet.',
  },
  {
    title: 'The Grudge',
    director: 'Takashi Shimizu',
    releaseYear: '2004',
    synopsis:
      'An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.',
  },
];

function fetchMovie(movieTitle) {
  return new Promise(function (resolve, reject) {
    // Based on "Using arrow function and destructuring" from here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_an_object_in_an_array_by_one_of_its_properties
    // Finds the movie in the array by it's exact title
    const result = movies.find(({ title }) => title === movieTitle);

    // Run the code after 1.5 seconds to simulate network delay
    setTimeout(() => {
      // If there is no result (the result is undefined)
      if (!result) {
        // Reject Promise with error message
        reject('Movie not found');
      } else {
        // Resolve Promise with the result object
        resolve(result);
      }
    }, 1500);
  });
}

document
  .getElementById('movie-form')
  .addEventListener('submit', async (event) => {
    // Clear the error message if there is one
    document.getElementById('error-message').innerText = '';

    // try catch block for error handling
    try {
      // Prevent browser from submitting form
      event.preventDefault();

      // Get the search string from the search box
      let searchString = document.getElementById('title-input').value;

      // Await the result from the fetchMovie function
      let result = await fetchMovie(searchString);
      console.log(result);

      // Get the movie info div
      let movieInfoDiv = document.getElementById('movie-info');

      // Populate the children elements of the move info div if the data from the result
      movieInfoDiv.children['movie-title'].innerText = result.title;
      movieInfoDiv.children[
        'movie-director'
      ].innerText = `Director: ${result.director}`;
      movieInfoDiv.children['movie-year'].innerText = result.releaseYear;
      movieInfoDiv.children['movie-synopsis'].innerText = result.synopsis;
    } catch (error) {
      // Log error to console
      console.log(error);

      // Show error on the page in the element with the id error-message
      document.getElementById('error-message').innerText = error;
    }
  });
