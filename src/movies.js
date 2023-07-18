import { movies } from "./data.js";

console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.

const directors = movies.map(movie => movie.director);
console.log(directors);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const uniqueDirectors = [...new Set(directors)];
console.log(uniqueDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');
console.log(howManyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const totalScores = movies.reduce((accumulator, movie) => accumulator + movie.score, 0);
const averageScore = totalScores / movies.length;

console.log(averageScore.toFixed(2));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    }

    const totalScores = dramaMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);
    const averageScore = totalScores / dramaMovies.length;

    return averageScore;
}

console.log(dramaMoviesScore(movies))


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
    console.log(sortedTitles);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function convertDurationToMinutes() {
    for (const movie of movies) {
        if (!movie.duration) {

            continue;
        }

        const duration = movie.duration;
        const timeParts = duration.split(" ");
        let totalMinutes = 0;

        for (const part of timeParts) {
            if (part.includes("h")) {
                totalMinutes += parseInt(part) * 60;
            } else if (part.includes("min")) {
                totalMinutes += parseInt(part);
            }
        }

        movie.duration = `${totalMinutes} minutes`;
    }
}

convertDurationToMinutes();

console.log(movies);


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return "No hay películas disponibles.";
    }

    const averageByYear = {};


    for (const movie of movies) {
        const year = movie.year;
        const score = movie.score;

        if (averageByYear[year]) {
            averageByYear[year].totalScore += score;
            averageByYear[year].totalCount += 1;
        } else {
            averageByYear[year] = {
                totalScore: score,
                totalCount: 1,
            };
        }
    }

    let bestYear = 0;
    let bestAverage = 0;

    for (const year in averageByYear) {
        const averageScore = averageByYear[year].totalScore / averageByYear[year].totalCount;

        if (averageScore > bestAverage) {
            bestAverage = averageScore;
            bestYear = year;
        }
    }

    return `El mejor año fue ${bestYear} con una puntuación media de ${bestAverage.toFixed(2)}.`;
}

console.log(bestYearAvg(movies));

