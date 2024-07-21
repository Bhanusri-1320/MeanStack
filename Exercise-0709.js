// 07-09-24
// Q1. Implement getUserAge function
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
  const age = userData?.user.profile?.age ?? "age is not provided";
  // const name = userData?.user?.profile?.name ?? "name is not provided";
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

function addSkill(employees, Skill) {
  Skill = Skill.split();
  // console.log(Skill);
  console.log(employees.skills);
  return ({ id1, name1, position1, skills1 } = {
    id1: employees.id,
    name1: employees.name,
    position1: employees.position,
    skills1: [employees.skills, ...Skill],
  });
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

console.log(getTotalPrice(products)); // Should print: 2200
function getTotalPrice(products) {
  console.log(
    products.map((product) => product.price).reduce((acc, curr) => acc + curr)
  );
}

// Q4: Write a function that extracts the user's name and theme,
//  providing default values if they are missing

const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};
// Using nullish coaliation
function getUserSettings(userProfile) {
  const name = userProfile?.name ?? "unknown";
  const theme = userProfile?.settings?.theme ?? "light";
  return `${name} prefers the ${theme} theme`;
}
console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// using array destructuring
function getUserSetting(userProfile) {
  const { name, settings: { theme = "light" } = {} } = {
    name: userProfile.name,
    // settings: userProfile.settings,
    // if(settings) {
    theme: userProfile.settings.theme,
    // },
  };
  // console.log(settings);
  console.log(theme);
  console.log(`${name} prefers the ${theme} theme`);
}
console.log(getUserSetting(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSetting({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// Q5: Write a function that takes a user object and returns a message indicating if the user is active or not

const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
function getUserStatus(user) {
  const name = user?.name ?? "unknown";
  const status = user?.active ?? false;
  status ? (Status = "active") : (Status = "inactive");
  return `${name} is currently ${Status}`;
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

function getUserAge(userWithFullProfile) {
  const age = userWithFullProfile?.profile?.age ?? "Age not provided";
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
  const score = scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 1)
    .map((student) => student.score);
  const name = scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 1)
    .map((student) => student.name);
  return `${name} is the top scorer with a score of ${score}`;
}
function getTopScorer(scores) {
  const [TopScorer] = scores.sort((a, b) => b.score - a.score).slice(0, 1);
  console.log(TopScorer);
  return `${TopScorer.name} is the top scorer with a score of ${TopScorer.score}`;
}
console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

//Q8: Create a function that returns a greeting message based on the time of day

// Ex26 - Create a function that returns a greeting message based on the time of day
function greet(name) {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
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
  const user = users.find((u) => u.id === id);
  if (!user) {
    return "User not found";
  }
  const { Name, friends } = user;
  [friend] = friends;
  if (friend) {
    f = friend.name;
    return f;
  } else {
    return `${Name} has no friends 🥲`;
  }
}
console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲
