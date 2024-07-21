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

//////////////////////////////////////////////////////////////////////////////////
// Task 1: High-Value Transactions in 2023
// Description: Given an array of transactions, identify transactions that are above $5000, occurred in 2023,
// and belong to the 'Business' category.
// Transform this filtered
// array into an array of strings formatted as "Transaction [id]: $[amount] on [date]".
// Data:
const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
["Transaction T2: $6500 on 2023-02-20"];
// Task 1: Departmental Salary Expenditure

console.log(
  transactions
    .filter(
      (transaction) =>
        transaction.category == "Business" &&
        transaction.amount > 5000 &&
        transaction.date.startsWith("2023")
    )
    .map(
      (transaction) =>
        ` Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date} `
    )
);

// Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.
// Data:
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

console.log(
  departments.map(
    (department) =>
      `${department.name}: ${department.employees.reduce(
        (acc, employee) => acc + employee.salary,
        0
      )}`
  )
);

// Expected Output:
// [{ Engineering: 170000 }, { Marketing: 125000 }];

// Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order of temperature and restructure the data into an object with dates as keys and temperatures as
// values.
// Data:
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];

const sortedData = weatherData
  .sort((a, b) => b.temperature - a.temperature)
  .reduce((acc, wd) => {
    acc[wd.date] = wd.temperature;
    return acc;
  }, {});

console.log(sortedData);
// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

// Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category with more
//than 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products1 = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];
console.log(
  products1
    .filter(
      (product) =>
        product.category == "Electronics" &&
        product.reviews > 50 &&
        product.rating >= 4.0
    )
    .map((product) => product.price)
    .reduce((acc, rating) => (acc + rating, 0) / rating.length)
    .toFixed(2)
);

// Expected Output:
// 199.99 // Assuming only one product meets the criteria

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects that includes each user's name and their corresponding
// order details.
// Data:
const users1 = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];
const combinedData = users1.map((user) => {
  const order = orders.find((o) => o.userId == user.userId);
  return {
    name: user.name,
    orderDetails: order.orderDetails,
  };
});
console.log(combinedData);
// Expected Output:
//[
//   { name: "Alice", orderDetails: "Order 1 Details" },
//   { name: "Bob", orderDetails: "Order 2 Details" },
// ];

// TASK 1: CONSOLIDATING EVENT ATTENDEES
// Description: Given arrays of attendees for different events, create a single
// array of unique attendees (no duplicates) sorted alphabetically by name.
// Data:
const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];
const TotalAttendees = [
  ...event1Attendees,
  ...event2Attendees,
  ...event3Attendees,
];
console.log(TotalAttendees);
obj = [...new Set(TotalAttendees)].sort();
console.log(obj);
// Expected Output:
// ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

// TASK 2: ANALYZING SURVEY RESPONSES
// Description: You have an array of survey responses where each response
// includes a list of topics and a rating (1-5). Find the average rating of each
// topic.
// Data:
const surveyResponses = [
  { topics: ["Environment", "Economy"], rating: 4 },
  { topics: ["Economy", "Health"], rating: 3 },
  { topics: ["Environment", "Politics"], rating: 5 },
  // more responses...
];
// Expected Output:
// { 'Environment': 4.5, 'Economy': 3.5, 'Health': 3, 'Politics': 5 }

// TASK 3: FILTERING AND MAPPING BOOK DATA
// Description: From an array of books, select books published after 2000 and
// create an array of their titles and authors in the format "Title by Author".
// Data:
const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];
console.log(
  books
    .filter((book) => book.year > 2000)
    .map((book) => `${book.title} by ${book.author}`)
);
// Expected Output:
// ['Book B by Author 2', 'Book C by Author 3']

// TASK 4: COMPLEX PRODUCT INVENTORY ANALYSIS
// Description: Given an array of products, each with a list of stores and their
// inventory, find products that are available in all stores. A product is available
// in a store if its inventory is more than 0.
// Data:
const productss = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
];
console.log(
  productss
    .filter((product) =>
      product.stores.every((product) => product.inventory > 0)
    )
    .map((product) => product.name)
);
//  // more responses...
// Expected Output:
// ['Product 2']

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
console.log(movies);
function getMovieDetails(id) {
  const movie = movies.find((movie) => movie.id == id);
  if (!movie) {
    return `movie not found`;
  }
  const title = movie.title;
  const genre = movie.genre;
  return `${title} is an ${genre} movie`;
}
console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

// Q11. Write a function that filters out movies released before a certain year
//and calculates the average rating of the remaining movies (Rating must be rounded)
const getAverageRatingAfterYear = (year) => {
  const filteredMovies = movies.filter((movie) => movie.year > year);
  if (filteredMovies.length == 0) {
    return "no movies after the specified yaer";
  }
  const totalRating = filteredMovies.reduce(
    (sum, movie) =>
      sum + movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length,
    0
  );
  const averageRating = totalRating / filteredMovies.length;
  return averageRating.toFixed(2);
};
console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy 26  8.33, Mahanati 27 9, and Jersey 26)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

// const filteredMovies = movies.filter((movie) => movie.year > year);
// if (filteredMovies.length === 0) return "No movies after the specified year";
// const totalRating = filteredMovies.reduce(
//   (sum, movie) =>
//     sum + movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length,
//   0
// );
// // const averageRating = totalRating / filteredMovies.length;
// // return averageRating.toFixed(2);
// return totalRating;

// Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value
function allRatingsAboveForGenre(rating, genre) {
  var movie = movies.filter(
    (movie) =>
      movie.genre == genre && movie.ratings.every((ratin) => ratin > rating)
  );
  if (movie.length != 0) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings
// console.log(movies);

// Q13: Write a function that returns a string with each movie's title and its ratings joined by commas
function getTitlesAndRatings() {
  return movies
    .map((movie) => `${movie.title} : ${movie.ratings.join(",")}`)
    .join(" | ");
}
console.log(getTitlesAndRatings());
// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

// Q14: Write a function that returns a single array containing all ratings of all movies

function getAllRatings() {
  return movies.reduce((acc, movie) => acc.concat(movie.ratings), []);
}
console.log(movies.map((movie) => movie.ratings).flat());
console.log(getAllRatings());
console.log(movies.map((mv) => mv.ratings).flat()); // using flat map
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

// Q15: Write a function that returns an array of titles of movies
// that have ratings above a certain threshold in any rating
function getTitlesWithHighRatings(ratingg) {
  return movies
    .filter((movie) => movie.ratings.some((rating) => rating > ratingg))
    .map((movie) => movie.title);
}
console.log(getTitlesWithHighRatings(8)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]
console.log(movies);

// Q16: Write a function that returns an array of movie titles sorted by their average ratings
// in descending order
// const getTitlesSortedByAverageRating = (movies) => {
//   return movies
//     .slice()
//     .sort((a, b) => {
//       const Avga =
//         a.ratings.reduce((acc, rating) => acc + rating, 0) / a.ratings.length;
//       const abgB =
//         b.ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
//       return avgB - Avga;
//     })
//     .map((movie) => movie.title);
// };

const getTitlesSortedByAverageRating = (movies) => {
  return movies
    .slice()
    .sort((a, b) => {
      const avgA =
        a.ratings.reduce((sum, rating) => sum + rating, 0) / a.ratings.length;
      const avgB =
        b.ratings.reduce((sum, rating) => sum + rating, 0) / b.ratings.length;
      return avgB - avgA;
    })
    .map((movie) => movie.title);
};

console.log(getTitlesSortedByAverageRating); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

// Q17: Write a function that finds the movie with the highest average rating and returns its title
function getMovieWithHighestAverageRating() {
  return movies.filter(
    (movie) =>
      movie.ratings.reduce((acc, rating) => acc + rating, 0) /
      movie.ratings.length
  );
  // .reduce((acc, curr) => Math.max(acc, curr));
  // .slice(0, 1)
  // .map((movie) => movie.title)
}
console.log(getMovieWithHighestAverageRating()); // Should print: Baahubali

// Q18: Write a function that returns an array of movie titles released after a certain year
function getTitlesAfterYear(year) {
  return movies
    .filter((movie) => movie.year > year)
    .map((movie) => movie.title);
}
console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]

// Q19: Write a function that finds a movie by its title and returns a formatted string with
//its director and year
function getMovieInfoByTitle(title) {
  return movies
    .filter((movie) => movie.title == title)
    .map((movie) => `${movie.title} directed by ${movie.director}`);
}
console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

// Q20: Write a function that returns an array of titles of movies that have at
//least one rating below a certain threshold
function getTitlesWithLowRatings(ratingg) {
  return movies
    .filter((movie) => movie.ratings.some((rating) => rating < ratingg))
    .map((movie) => movie.title);
}
console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

// Q21: Write a function that calculates the total number of ratings for movies of a specific genre
function getTotalRatingsByGenre(genree) {
  return movies
    .filter((movie) => movie.genre == genree)
    .map((movie) => movie.ratings.length);
}
console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3

// Q22: Write a function that returns an array of movies where the average rating is above
//  a certain value, including the average rating in the result
function getMoviesWithHighAverageRating(ratingg) {
  var rattingss = movies.filter(
    (movie) =>
      movie.ratings.reduce((acc, rating) => (acc + rating, 0)) /
      movie.ratings.length
  );
  return movies
    .filter((movie) => rattingss > ratingg)
    .map((movie) => movie.title);
}
console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating
//  of 8.67", "Jersey has an average rating of 8.67"]
