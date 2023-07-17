import { movies} from "./data.js";
    
    console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.

const directors = movies.map(movie => movie.director);
console.log(directors);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies.filter(movie => movie.genre.includes ('Drama') && movie.director === 'Steven Spielberg');
console.log(howManyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const totalScores = movies.reduce((accumulator, movie) => accumulator + movie.score, 0);
const averageScore = totalScores / movies.length;

console.log(averageScore.toFixed(2));
 
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore (movies) {

    const dramaMovies = movies.filter (movie => movie.genre.includes("Drama"));
    
    if (dramaMovies.length === 0) {
      return 0; 
    }
  
    const totalScores = dramaMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);
    const averageScore = totalScores / dramaMovies.length;
  
    return averageScore;
  }
  
console.log(averageScore.toFixed(2));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies.sort((a, b) => {

    if (a.year === b.year) {

      return a.title.localeCompare(b.title); 
    }
    return a.year - b.year; 
  });
  
  console.log(orderByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const sortedArray = array
    function orderAlphabetically(array) {
        const sortedTitles = array
          .slice(0, 20) 
          .map(movie => movie.title) 
          .sort((a, b) => a.localeCompare(b));
      
        return sortedTitles;
      }     
    
  const sortedTitles = orderAlphabetically(movies);
console.log(sortedTitles);}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function convertDurationToMinutes(movie) {
    const duration = movie.duración;
    const [hours, minutes] = duration.split("h ");
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    movie.duración = totalMinutes;
    return movie;
  }
  
  const moviesWithMinutes = movies.map(movie => convertDurationToMinutes(movie));
  
  console.log(moviesWithMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
