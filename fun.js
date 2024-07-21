/*
console.log("hello world");
console.log(a); // not defined is error --undefined means
var a = 10;
console.log(b); // undefined
var b;
console.log(b); // undefined
let b = 10; 
console.log(b); // 10

function func() {
  var a = "Geeks";
  if (true) {
    var a = "GeeksforGeeks"; // New value assigned
    console.log(a);
  }
  console.log(a);
}
func();

function fun() {
  var a = "Geeks";
  if (true) {
    let a = "GeeksforGeeks"; // New value assigned
    console.log(a);
  }
  console.log(a);
}
fun();

function fun1() {
  var a = "Geeks";
  let a = "GeeksforGeeks"; // this is redeclaration
  if (true) {
    let a = "GeeksforGeeks"; // not redeclaration coz it is in another scope
    console.log(a);
  }
  console.log(a);
}
fun1();

function sayhello() {
  return "hello";
}

console.log(typeof sayhello); // function
function sayhello() {
  return function () {
    // function with no name called annonamous function
    console.log("hello 😍");
  };
}
sayhello()();
let code = "hulk";
function funnnn() {
  console.log(code);
}
funnnn();

let codeWord = "Hulk";

function spaceShip() {
  let question = "Please provide the code word";

  function codeWordCheck() {
    let password = "Hulk";
    console.log(question);
    if (password === codeWord) {
      console.log("Welcome," + password + " the strongest avenger");
    } else {
      console.log("Access denied");
    }
  }
  codeWordCheck();
}
spaceShip();

// table--methods --table(methods,mutable)
// slice- immutable array method
// Join
arr = [1, 2, 3, 4];
arr.slice(2, 4); // 3,4
console.log(arr); // immutable
arr.join("-"); //1-2-3-4
arr.join(); // 1,2,3,4

// Split- string method- immutable
"1-2-3".split("-"); // 1-2-3-4==['1','2','3','4'] // will give the strings inside the array

arr.map((n) => n + 1); // inbuilt  higher order function

arr1 = [5, 6, 7, 8, 9]; // if we want to double all the elemetns
// arr1.map((x) => x * 2); // immutable
console.log(arr1);
function doubling(arr2) {
  var arr2 = [];
  for (let i of arr1) {
    arr2.push(i * 2);
  }
  console.log(arr2);
}
doubling(arr1);

console.log(arr.map((n) => n * 2));

array = [1, 2, 5, 78, 0];
for (let i in array) {
  console.log(i); //0,1,2,3,4
}
for (let i of array) {
  console.log(i); //1,2,5,78,0
}

arr1 = [5, 6, 7, 8, 9];

var arr2 = [];
function OwnMap(doublearray, arr1) {
  for (let i of arr1) {
    arr2.push(doublearray(i));
  }
  console.log(arr2);
  console.log(arr1);
}

arr1 = [5, 6, 7, 8, 9];
OwnMap((i) => i * 2, arr1);
var arr3 = [];
function lesstwoofarray(fun, arr) {
  for (i of arr) {
    arr3.push(fun(i));
  }
  console.log(arr3);
}
lesstwoofarray((i) => i * 2 - 1, arr1);

// function ownMap(fn, arr){
//     // your logic
// }

// ownMap((chiku) => chiku * 2,  [5, 6, 9, 10])
// // [10, 12, 18, 20]

// ownMap((chiku) => chiku - 2,  [5, 6, 9, 10])
// // [3, 4, 7, 8]

// function ownMap(fn, arr){
//     // your logic
// }

// ownMap((chiku) => chiku * 2,  [5, 6, 9, 10])
// // [10, 12, 18, 20]

// ownMap((chiku) => chiku - 2,  [5, 6, 9, 10])
// // [3, 4, 7, 8]


let v = [5, 6, 9, 10].map((x, i) => x * 2 + i);
console.log(v);

function OwnMap1(fn, arr) {
  var array = [];
  for (let i in arr) {
    array.push(fn(arr[i]) + i);
  }
  return array;
}

console.log(
  OwnMap1((n) => n * 2),
  v
);

arr1 = [1, 2, 3, 4];
arr2 = [1, 2, 3, 4, 5];
function OwnMap2(fn, arr) {
  var array = [];
  for (let i in arr) {
    array.push(fn(arr[i], parseInt(i)));
  }
  return array;
  //onsole.log(array);
}
console.log(OwnMap2((n, i) => n - 2 + i, arr2));
*/
const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

console.log(avengers.map((i) => i.length));

// Filter
console.log(avengers.filter((name) => name.length > 10));

// practise
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Rating 4.7 or more

console.log(
  books
    .filter((book) => book.rating >= 4.7)
    .map((book) => book.title)
    .sort()
);

//arr.map((n) => n + 1);
//console.log(books.map((b) => b.title).filter((rating) => rating >= 4.7));
//var book1 = book.filter((rating) => rating >= 4.7);
//console.log(book1);
console.log(
  books.filter((rating1) => rating1.rating >= 4.7).map((book) => book.title)
);
//console.log(books);
// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
