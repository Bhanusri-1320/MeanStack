// Task 1: High-Value Transactions in 2023
// Description: Given an array of transactions, identify transactions that are above $5000, occurred in 2023, and belong to the 'Business' category. Transform this filtered
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
// Task 2: Departmental Salary Expenditure
console.log(
  transactions
    .filter((transaction) => transaction.amount > 5000)
    .map(
      (transaction) =>
        ` Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date} `
    )
);

//console.log(
//  ` Transacrion ${transactions[1].id}: $${transactions[1].amount} on ${transactions[1].date}`
// );

// Top 3 Students
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

// This should output: "Eva, Bob, Charlie"
console.log(
  students
    .filter((student) => student.score)
    .sort((a, b) => b.score - a.score)
    //.reverse()
    .slice(0, -2)
    .map((student) => student.name)
    .join(", ")
);

// console.log(students.map());

// Grade is 80 or more - promote

const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

//console.log(({ id, name, grade, status = "promoted" } = employees));
//var so { id, name, grade, status = "promoted" } = employees

//var { id, name, grade, status = "promoted" } = employees;
console.log(
  employees
    .filter((employee) => employee.grade >= 80)
    .map((employee) => ({ ...employee, status: "Promoted" }))
);

const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];
//Output
// 'David, Eva','Bob'

console.log(
  players
    .filter((player) =>
      requiredSkills.every((skill) => player.skills.includes(skill))
    )
    .map((player) => player.name)
);

const person1 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
  //   place: {
  //     city: "Chennai",
  //   },
};

// defensive code
if (person1.place && person1.place.city) {
  console.log(person1.place.city);
} else {
  console.log("unknown");
}

// to slove above -- optional chaining

console.log(person1?.place?.city); // not defensive code

console.log(person1?.place?.city || "unknown"); //  checks all the falsy values , ut if we don't want to consider all those
console.log(person1?.place?.city ?? "unknown"); // nullish coaliation consoders only null/undefined

// Object short hand
// if the key name and var names are tren only the key can be shortend

// Ex1

const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

// function getPersonInfo(person1) {
//   const {
//     name: { first: firstName, last: lastName },
//     age: personAge,
//     favoriteColors: [primaryColor, secondaryColor],
//   } = person1;
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }

// console.log(getPersonInfo(person1));
// // more
// function getPersonInfo({
//   name: { first: firstName, last: lastName },
//   age: personAge,
//   favoriteColors: [primaryColor, secondaryColor],
// }) {
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }
// adding arroe function  (n) => n + 1

const person2 = ({
  name: { first: firstName, last: lastName },
  age: personAge,
  favoriteColors: [primaryColor, secondaryColor],
}) =>
  `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;

console.log(person2(person));

// Ex2:
function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getSummary: function () {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary(), book);
//////////////////////////////////////// refactered code
function createBook1(title, author, year) {
  return {
    title,
    author,
    year,
    getSummary() {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book1 = createBook("1984", "George Orwell", 1949);
console.log(book1.getSummary(), book1);

const createBook2 = (title, author, year) => ({
  title,
  author,
  year,
  getSummary() {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book2 = createBook("1984", "George Orwell", 1949);
console.log(book2.getSummary(), book2);

// Ex3:

const users = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);

  const age = user.profile?.age || "unknown";
  const city = user.profile?.address?.city || "unknown";

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}

displayUserProfile(1); // Should work
displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case

// Ex 4
const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

//console.log(library.filter((books) => books.borrowed));
// Task 4.1: Determine if all books in the library have been borrowed.

// console.log(
//     players
//       .filter((player) =>
//         requiredSkills.every((skill) => player.skills.includes(skill))
//       )
//       .map((player) => player.name)
//   );

// console.log(library.filter((book) => book.every((books))));

var lib = library.every((book) => book.borrowed);
console.log(lib);

// Output;
// ("Yes, all books are borrowed");

// Task 4.2: Determine if there are books in the library written by multiple authors

// Output;
// ("No, there are no multiple authors");

const sum = [1, 7, 3, 10, 5].reduce((acc, curr, i) => {
  return acc.concat(curr * i);
}, []);

const max = [1, 7, 3, 10, 5].reduce((acc, curr) => {
  var x = acc.concat(curr);
  var y = x.sort((a, b) => b - a).slice(0, 1);
  return y;
}, []);
console.log(max);

const maxx = [1, 7, 3, 10, 5].reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(maxx);

const maxxx = [1, 7, 3, 10, 5].reduce((acc, curr) => Math.max(acc, curr));
console.log(maxxx);

// 07-09-24
const userData1 = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  const age = userData?.user.profile?.age || "age is not provided";
  const name = userData?.user?.profile?.name || "name is not provided";
  if (age) {
    console.log(age);
  } else {
    console.log(name);
  }
}
console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

// Q3. Find the total price of all products using arrow functions and array methods -
//  Implement getTotalPrice
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

console.log(getTotalPrice(products)); // Should print: 2200
function getTotalPrice(products) {
  console.log(
    products.map((product) => product.price).reduce((acc, curr) => acc + curr)
  );
}
const users1 = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);

  const age = user.profile?.age || "unknown";
  const city = user.profile?.address?.city || "unknown";

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}
