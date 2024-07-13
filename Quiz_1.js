const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// //Q10. Write a function that finds a movie by id and returns its title and genre in a formatted string
// console.log(movies);

function getMovieDetails(id) {
  const user = movies.find((u) => u.id === id);
  // if(user) ? `${title} is an ${genre} movie` : 'Movie not found'
  if (!user) {
    return "Movie not found";
  }
  const title = user.title;
  const genre = user.genre;
  return `${title} is an ${genre} movie`;
}
console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

// Q11. Write a function that filters out movies released before a certain year
//and calculates the average rating of the remaining movies (Rating must be rounded)
function getAverageRatingAfterYear(givenyear) {
  const { year, ratings } = movies;
  console.log(year);
  console.log(givenyear);
  console.log(movies.map((movie) => movie.year));

  console.log(
    movies
      .filter((movie) => movie.year > 2016)
      .map((movie) => movie.ratings.reduce((acc, curr) => acc + curr))
    // .map((movie) => movie.ratings)
    // .reduce((acc, curr) => (acc + curr) / 3)
  );
  //console.log(movies.map((movie) => movie.year).filter((movie)=>))
  if (givenyear > movies.map((movie) => movie.year)) {
    console.log("no ");
  }
}
console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy 26  8.33, Mahanati 27 9, and Jersey 26)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

// Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value

function allRatingsAboveForGenre(grating, ggenre) {
  var status = movies
    .filter((movie) => movie.genre == ggenre)
    .every((movie) => movie.ratings.every((rating) => rating > grating));
  if (status) {
    return `Yes, all ${ggenre} movies are above ${grating} ratings`;
  } else {
    return `No, not all ${ggenre} movies are above ${grating} ratings`;
  }
}
console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings
console.log(movies);
// Q13: Write a function that returns a string with each movie's title and its ratings joined by commas
function getTitlesAndRatings() {
  var titleRating = movies.map(
    (movie) => `${movie.title} : ${movie.ratings.join(", ")}`
  );
  return titleRating.join(" | ");
}
console.log(getTitlesAndRatings());
// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

// Q14: Write a function that returns a single array containing all ratings of all movies
function getAllRatings() {
  var rating = movies.map((movie) => `${movie.ratings.join(",")}`);
  return rating.join(",").split();
}
console.log(getAllRatings());
console.log(movies.map((mv) => mv.ratings).flat()); // using flat map
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

// Q15: Write a function that returns an array of titles of movies
// that have ratings above a certain threshold in any rating
function getTitlesWithHighRatings(givenrating) {
  var HighRatingTitles = movies
    .filter((movie) => movie.ratings.every((rating) => rating >= givenrating))
    .map((movie) => movie.title);
  return HighRatingTitles;
}
console.log(getTitlesWithHighRatings(8)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]

// Q16: Write a function that returns an array of movie titles sorted by their average ratings
// in descending order
function getTitlesSortedByAverageRating() {
  console.log(
    movies
      // .filter((movie) => movie)
      .filter((movie) =>
        movie.ratings.reduce(
          (acc, curr) => (acc + curr, 0) / movie.ratings.length
        )
      )
      .sort((a, b) => b.ratings - a.ratings)
      .map((movie) => movie.title)
  );
}
console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

// Q17: Write a function that finds the movie with the highest average rating and returns its title

function getMovieWithHighestAverageRating() {
  console.log(
    movies.filter(
      (movie) =>
        movie.ratings.reduce(((acc, rating) => acc + rating, 0) / rating.length)
      // .sort()
      // .reverse()
      // .slice(0, 1)
      //  .map((movi) => movi.title)
    )
  );
}
console.log(getMovieWithHighestAverageRating()); // Should print: Baahubali

// Q18: Write a function that returns an array of movie titles released after a certain year
function getTitlesAfterYear(givenYear) {
  var titles = movies
    .filter((movie) => movie.year > givenYear)
    .map((movie) => movie.title);
  return titles;
}
console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]

// Q19: Write a function that finds a movie by its title and returns a formatted string with
//its director and year
function getMovieInfoByTitle(Title) {
  //const movieee = movies.filter((movie) => movie.title == Title);
  const movieee = movies.find((u) => u.title === Title);
  if (!movieee) {
    return "Movie not found";
  }
  var text = ` ${movieee.title} directed by ${movieee.director} was released in ${movieee.year}`;
  return text;
}

console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

// Q20: Write a function that returns an array of titles of movies that have at
//least one rating below a certain threshold

function getTitlesWithLowRatings(givenrating) {
  console.log(
    movies
      .filter((movie) => movie.ratings.some((rating) => rating < givenrating))
      .map((movie) => movie.title)
  );
}

console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

// Q21: Write a function that calculates the total number of ratings for movies of a specific genre
function getTotalRatingsByGenre(givengenre) {
  console.log(
    movies
      .filter((movie) => movie.genre == givengenre)
      .map((movie) => movie.ratings.length)
  );
}
console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3

// Q22: Write a function that returns an array of movies where the average rating is above
//  a certain value, including the average rating in the result

// console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating
//  of 8.67", "Jersey has an average rating of 8.67"]

// Q23: Write a function that returns an array of movie titles directed by a specific director, sorted by year in ascending order
function getTitlesByDirectorSortedByYear(directorName) {
  console.log(
    movies
      .sort((a, b) => a.year - b.year)
      .filter((movie) => movie.director == directorName)
      .map((movie) => movie.title)
  );
}
console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

// Q24: Write a function that returns the average rating of movies released in a specific year
function getAverageRatingByYear(givenyear) {
  var Movie = movies.filter((movie) => movie.year === givenyear);
  if (!Movie) {
    return `No movies released in the ${givenyear} year`;
  }
  var sum = Movie.map((movie) =>
    movie.ratings.reduce((acc, rating) => acc + rating)
  );
  var Len = Movie.map((movie) => movie.ratings.length);
  avg = sum / Len;
  avg = Math.round(avg);
  return avg;
}
console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the specified year"

// Q25: Write a function that returns an array of objects with movie titles and their highest ratings
function getMoviesWithHighestRatings() {
  console.log(
    movies
      .filter((movie) =>
        movie.ratings.reduce((acc, curr) => Math.max(acc, curr))
      )
      .map(
        (movie) =>
          ` title: ${movie.title.split()} , highestRating: ${movie.ratings.reduce(
            (acc, curr) => Math.max(acc, curr)
          )},`
      )
  );
}
console.log(getMoviesWithHighestRatings());
// Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 }, { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }]

// Q26: Write a function that returns the director with the most movies directed
function getDirectorWithMostMovies() {
  console.log(
    movies.filter((movie) => movie.director).map((movie) => movie.director)
  );
}
// find((dir) => director.dir == director.dir)
console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

// Q27: Write a function that merges two arrays of movies into one using the spread operator
function mergeMovies(movies, moreMovies) {
  return [...movies, ...moreMovies];
}

// Should print: array with all 7 movies
// Q28: Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator
function getTitles(...movies) {
  console.log(
    movies.filter((movie) => movie.id === movies.id)
    // .map((movie) => movie.title)
  );
}
console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];
function mergeMovies(movies, moreMovies = []) {
  return [...movies, ...moreMovies];
}

console.log(mergeMovies(movies, moreMovies)); // Should print the merged array of movies
console.log(mergeMovies(movies)); // Should print the original array of movies

// Q30: Write a function that returns the last N movie titles, using slice and spread operator with a default value for N
function getLastNMovieTitles(n = 3) {
  console.log(movies.map((movie) => movie.title).slice(-n));
}
console.log(getLastNMovieTitles()); // Should print the last 3 movie titles
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

// Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals Interesting
function getMovieTitlesByIds(...ids) {
  var status = movies.filter((movie) => ids.includes(movie.id));
  var b = ids.includes(movies.filter((movie) => movie.id));
  console.log(
    movies.filter((movie) => ids.includes(movie.id)).map((movie) => movie.title)
  );
  console.log(status);
  console.log(b);
  console.log(movies.map((movie) => movie.id));
  var arr = movies.map((movie) => movie.id);
  var bool = ids.includes(arr);
  console.log(bool);
}
console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: Selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

//
