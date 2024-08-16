const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  const age = userData?.user?.profile?.age ?? "age not provided";
  return age;
}
console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

// Q2. Write a function that returns a new array with an additional skill for each employee
const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];
function addSkill(employees, extraSkill) {
  // employees.skills.push(extraSkill);
  return employees.filter((employee) => employee.skills.push(extraSkill));
  // return employees;
}
console.log(addSkill(employees, "Problem Solving"));
// Should print:
// [
//   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
//   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// ]

// Q3. Find the total price of all products using arrow functions and array methods -
//  Implement getTotalPrice
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];
function getTotalPrice(products) {
  return products
    .map((product) => product.price)
    .reduce((acc, price) => acc + price);
}
console.log(getTotalPrice(products)); // Should print: 2200

// Q4: Write a function that extracts the user's name and theme,
//  providing default values if they are missing

const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};
function getUserSettings(userProfile) {
  const name = userProfile?.name ?? "unknown";
  const theme = userProfile?.settings?.theme ?? "light";
  return `${name} prefers ${theme} theme`;
}
console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// using array desturcturing:
function getUserSetting(userProfile) {
  const { name, settings: { theme = "light" } = {} } = userProfile;
  console.log(`${name} prefers ${theme} theme`);
}
console.log(getUserSetting(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSetting({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// Q5: Write a function that takes a user object and returns a message indicating if the user is active or not

const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
function getUserStatus(user) {
  const name = user?.name ?? "unknown";
  const active = user?.active ?? false;
  const status = active ? "active" : "inactive";
  return `${name} is currently ${status}`;
}
console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

// Q6: Write a function that returns the user's age if available,
// or a default message if not, using nullish coalescing and optional chaining

const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};
function getUserAge(user) {
  const age = user?.profile?.age ?? "age is not provided";
  return age;
}
console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

//Q7: Write a function that generates a summary string for
//the top scorer using template literals and array methods

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];
function getTopScorer(scores) {
  const [arr] = scores.sort((a, b) => b.score - a.score).slice(0, 1);
  return `${arr.name} is the top scorer with a score of ${arr.score}`;
  // return arr;
}
console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

//Q8: Create a function that returns a greeting message based on the time of day
function greet(name) {
  const hours = new Date().getHours();
  const timeOfDay = hours < 12 ? "morning" : hours < 18 ? "evening" : "night";
  return `Good ${timeOfDay}, ${name}!`;
}
console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)

// Q9: Write a function that returns the name of a user's first friend using nested destructuring

const users = [
  { id: 1, Name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, Name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, Name: "Deepak", friends: [] },
];
function getFirstFriendName(id) {
  user = users.find((u) => u.id == id);
  if (!user) {
    return `user not found`;
  }
  const { Name, friends } = user;
  const [friend] = friends;
  if (friend) {
    return friend.name;
  } else {
    return `${Name} has no friends`;
  }
}

console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲

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

//Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals Interesting
//Task 31

function getMovieTitlesByIds(...id) {
  const v = id.map((ren) => {
    let mve = movies.find((dull) => dull.id == ren);
    return mve?.title ?? "Unknown Title";
  });
  return `Selected Movies: ${v}`;
}
console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: Selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

// Write a function that accepts any number of movies and returns a formatted string listing their titles and genres using the rest operator, nullish coalescing, and template literals
// Task 32

function listMovies(...movies) {
  return movies.map((p) => {
    return `${p.title} (${p.genre})`;
  });
}
console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

//Write a function that calculates the total number of ratings for each director
//Task 33

const getTotalRatingsForDirectors = () => {
  return movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});
};

console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

//Q34: Write a function that returns an array of genres sorted by the total number of ratings received by movies in that genres Challenging

// function getGenresSortedByTotalRatings(movies){
//   const genreRatings = movies.reduce((acc, movie) => {
//     acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
//   return Object.keys(genreRatings).sort((a, b) => genreRatings[b] - genreRatings[a]);
// };
// console.log(getGenresSortedByTotalRatings(movies)); // Should print genres sorted by total ratings

function getGenresSortedByTotalRatings(movies) {
  const ans = movies.reduce((a, c) => {
    a[c.genre] = (a[c.genre] || 0) + c.ratings.length;
    return a;
  }, {});
  return Object.keys(ans).sort((a1, b1) => ans[b1] - ans[a1]); //sorting the genre's.
}
console.log(getGenresSortedByTotalRatings(movies)); // Should print genres sorted by total ratings

//Q35: Write a function that returns an array of movie titles directed by directors who have directed more than one movie Challenging
// const getTitlesByDirectorsWithMultipleMovies = (movies) => {
//   const directorCount = movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + 1;
//     return acc;
//   }, {});
//   return movies
//     .filter((movie) => directorCount[movie.director] > 1)
//     .map((movie) => movie.title);
// };

// console.log(getTitlesByDirectorsWithMultipleMovies(movies)); // Should print: ["Baahubali", "Eega"]

function getTitlesByDirectorsWithMultipleMoviess(movies) {
  const ans = movies.reduce((a, c) => {
    a[c.director] = (a[c.director] || 0) + 1;
    return a;
  }, {});
  return movies.filter((m) => ans[m.director] > 1).map((m) => m.title);
}
console.log(getTitlesByDirectorsWithMultipleMoviess(movies)); // Should print: ["Baahubali", "Eega"]

//36 Write a function that calculates the total number of ratings for each genre and returns the genre with the highest total ratings Challenging
// const getGenreWithHighestTotalRatings = (movies) => {
//   const genreRatings = movies.reduce((acc, movie) => {
//     acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
//     return acc;
//   }, {});
//   return Object.keys(genreRatings).sort((a,b)=>genreRatings[b]-genreRatings[a])[0]
// };

const getGenreWithHighestTotalRatings = (movies) => {
  const genreRatings = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + movie.ratings.length;
    return acc;
  }, {});
  return Object.keys(genreRatings).reduce((a, b) =>
    genreRatings[a] > genreRatings[b] ? a : b
  );
};
console.log(getGenreWithHighestTotalRatings(movies)); // Should print the genre with the highest total ratings

// //Q37: Write a function that returns an array of directors who have directed movies with an average rating above a certain value
// //Challenging
// const getDirectorsWithHighAverageRatings = (movies, threshold) => {
//   const directorRatings = movies.reduce((acc, movie) => {
//     if (!acc[movie.director]) {
//       acc[movie.director] = { total: 0, count: 0 };
//     }
//     acc[movie.director].total += movie.ratings.reduce(
//       (sum, rating) => sum + rating,
//       0,
//     );
//     acc[movie.director].count += movie.ratings.length;
//     return acc;
//   }, {});

//   return Object.keys(directorRatings).filter((director) => {
//     const avgRating =
//       directorRatings[director].total / directorRatings[director].count;
//     return avgRating > threshold;
//   });
// };
// console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings

//Q38: Write a function that updates a movie's genre and ratings by ID, using object destructuring, spread operator, and default values Challenging
const updateMovieDetails = (movies, id, { genre, ratings }) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return "Movie not found";
  movies[index] = {
    ...movies[index],
    genre: genre || movies[index].genre,
    ratings: ratings || movies[index].ratings,
  };
  return movies[index];
};
console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
console.log(updateMovieDetails(6, { genre: "Thriller" }));
// Should print: Movie not found

const updateMovieDetailss = (movies, id, { genre = "", ratings = [] } = {}) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return "Movie not found";

  movies[index] = {
    ...movies[index],
    genre: genre || movies[index].genre,
    ratings: ratings || movies[index].ratings,
  };

  return movies[index];
};
console.log(updateMovieDetailss(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
console.log(updateMovieDetailss(6, { genre: "Thriller" }));
// Should print: Movie not found

//Q39: Update or add a movie based on the id Challenging
console.log(
  updateOrAddMovie({
    id: 6,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  })
);
// Should add Pushpa to the list
console.log(
  updateOrAddMovie({
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [10, 10, 9],
    genre: "Sports",
  })
);
// Should update Jersey's ratings in the list

const updateOrAddMovie = (movies, newMovie) => {
  const index = movies.findIndex((movie) => movie.id === newMovie.id);
  if (index === -1) {
    movies.push(newMovie);
  } else {
    movies[index] = {
      ...movies[index],
      ...newMovie,
    };
  }
  return movies;
};
