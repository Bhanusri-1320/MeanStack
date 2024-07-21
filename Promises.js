// promise creation
// promise is a class
let drivingEligibileTest = new Promise((resolve, reject) => {
  let age = 24;
  if (age >= 18) {
    resolve("yes,you are eligible");
  } else {
    reject("try after some years");
  }
});

// usingh the promise
// only positive senario will be handled by then , only if it true it will come to then
drivingEligibileTest
  .then((output) => console.log("congrats:" + output))
  // .then((outout) => console.log(outout)) // congrats:yes,you are eligible
  // -ve senario will be handled by catch
  .catch((msg) => console.log("oops:" + msg)); // in case of -ve senario .then will be skipped
console.log(typeof drivingEligibileTest); //  promise object
console.log(drivingEligibileTest); // Promise {<rejected>: 'try after some years'}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: "try after some years"
// .then will always returns a promise object
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => console.log(data));
// 1. get all the country names
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => console.log(data.map((data) => data.name.common)));

// //   Task 2 -> Population more than 1_00_00_000 & Sorted by population
//         Output
//        ["India", "China", "Russia" ... ]

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) =>
    console.log(
      data
        .sort((a, b) => b.population - a.population)
        .filter((data) => data.population > 10000000)
        .map((data) => data.name.common)
    )
  );

// Task 3 -> Population more than 1_00_00_000
//   Output
//  1. India - 150000000
//  2. China - 120000000
//  3. Russia - 80000000
// ....
// let index = 1;
let arr = [];
// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((data) =>
//     data
//       .sort((a, b) => b.population - a.population)
//       .filter((dataa) => dataa.population > 10000000)
//       .map((data) => {
//         arr = `${index}. ${data.name.common} - ${data.population}`;
//         index++;
//       })
//   );
// console.log(arr.join(""));
var str;
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) =>
    data
      .sort((a, b) => b.population - a.population)
      .filter((data) => data.population > 10000000)
      .map((data, index) => {
        return `${index + 1}. ${data.name.common} - ${data.population}`;
      })
  )
  .then((output) => console.log(output.join("\n")));

//  Task-4 -> Get top 10 populated countries

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) =>
    data
      .sort((a, b) => b.population - a.population)
      .filter((data) => data.population > 10000000)
      .slice(0, 11)
      .map((data, index) => {
        return `${index + 1}. ${data.name.common} - ${data.population}`;
      })
  )
  .then((output) => console.log(output.join("\n")));

// Task-5 --> Display the Top 10 on the screen in list form & population are comma seperated

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) =>
    data
      .sort((a, b) => b.population - a.population)
      .filter((data) => data.population > 10000000)
      .slice(0, 11)
      .map((data, index) => {
        return `${index + 1}. ${data.name.common} - ${
          data.population.toLocalString
        }`;
      })
  )
  .then((output) => console.log(output.join("\n")));

// asny await

async function getCountriesByPopulation1(population) {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const data = countries
    .filter((country) => country.population > population)
    .toSorted((countryA, countryB) => countryB.population - countryA.population)
    .map((country) => country.name.common);

  console.log(data);
}

await getCountriesByPopulation1(1_00_00_000); // called top level await- it will wait unit this line is executed

console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
// we can use await in fn where it returns an promise object

// async function getCountriesByPopulation1(population) {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     var countries = await res.json();
//   } catch (err) {
//     console.log(err);
//   }

//   const data = countries
//     .filter((country) => country.population > population)
//     .toSorted((countryA, countryB) => countryB.population - countryA.population)
//     .map((country) => country.name.common);

//   console.log(data);
// }

// await getCountriesByPopulation1(1_00_00_000); // called top level await- it will wait unit this line is executed

// async function getTempCity(population) {
//   try {
//     const res = await fetch(
//       "http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=Hyderabad&aqi=no"
//     );
//     var countries = await res.json();
//   } catch (err) {
//     console.log(err);
//   }

//   const data = countries.filter((country) => country);
//   // .toSorted((countryA, countryB) => countryB.population - countryA.population)
//   // .map((country) => country.name.common);

//   console.log(data);
// }

// await getTempCity(1_00_00_000);

fetch(
  "http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=Hyderabad&aqi=no"
)
  .then((response) => response.json())
  .then(
    (data) => data
    // .sort((a, b) => b.population - a.population)
    // .filter((data) => data.population > 10000000)
    // .slice(0, 11)
    // .map((data, index) => {
    //   return `${index + 1}. ${data.name.common} - ${
    //     data.population.toLocalString
    //   }`;
    // })
  )
  .then((output) =>
    console.log(`${output.location.name} : ${output.current.temp_c}`)
  );

// var obj;
// function getTempCity(city) {
//   fetch(
//     "http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=Hyderabad&aqi=no"
//   )
//     .then((response) => response.json())
//     .then((data) => data);
//   const { current, location } = city;
//   // city.then((output) => console.log(output));
//   obj.push(`${location.name} : ${current.temp_c}`);
//   //console.log(`${location.name} : ${current.temp_c}`);
//   return obj;
// }
// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=Hyderabad&aqi=no"
// )
//   .then((response) => response.json())
//   .then((data) => getTempCity(data));

// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=Chennai&aqi=no"
// )
//   .then((response) => response.json())
//   .then((data) => getTempCity(data));

// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=maduri&aqi=no"
// )
//   .then((response) => response.json())
//   .then((data) => getTempCity(data));
// // ${output.location.name} : ${output.current.temp_c}

// console.log(obj);

async function getTempBYCity(city) {
  return await fetch(
    `http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=${city}&aqi=no`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((output) => [output.location.name, output.current.temp_c]);
}

// Promise.all();
var cities = ["Hyderabad", "chennai", "maduri"];
cities.map((city) => getTempBYCity(city));
var p1 = getTempBYCity("Hyderabad");
var p2 = getTempBYCity("chennai");
var p3 = getTempBYCity("maduri");

Promise.all([p1, p2, p3])
  .then((value) => Object.fromEntries(value))
  .then((value) => console.log(value));

/////////////////////////////////////////////////////
// REfactoring

const API_KEY = "a14f4d49a9b941c5b9f71522241907";

var cities = ["chennai", "madurai", "erode"];

var result = {
  chennai: 29.0,
  madurai: 32.0,
  erode: 28.0,
};

async function getTempBYCities(city) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=a14f4d49a9b941c5b9f71522241907&q=${city}&aqi=no`,
    { mode: "cors" }
  );
  const output = await res.json();
  return [output?.location?.name, output?.current?.temp_c];
}
// Promise.all();
var cities = ["Hyderabad", "chennai", "maduri"];
var promises = cities.map((city) => getTempBYCity(city));

await Promise.all(promises)
  .then((value) => Object.fromEntries(value))
  .then((value) => console.log(value));

// more refactring
await Promise.all(cities.map((city) => getTempBYCity(city)))
  .then((value) => Object.fromEntries(value))
  .then((value) => console.log(value));

// more
await Promise.all(cities.map(getTempBYCity))
  .then((value) => Object.fromEntries(value))
  .then((value) => console.log(value));

var p1 = getTempBYCity("Hyderabad");
var p2 = getTempBYCity("chennai");
var p3 = getTempBYCity("maduri");
var p = [];
cities.map((city, i) => (p[i] = getTempBYCity(city)));
await Promise.all([p])
  .then((value) => Object.fromEntries(value))
  .then((value) => console.log(value));

let P1 = fetch(
  `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cities[0]}&aqi=no`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => [data?.location?.name, data?.current?.temp_c]);

let P2 = fetch(
  `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cities[1]}&aqi=no`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => [data?.location?.name, data?.current?.temp_c]);

let P3 = fetch(
  `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cities[2]}&aqi=no`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => [data?.location?.name, data?.current?.temp_c]);

await Promise.all([P1, P2, P3])
  .then((values) => Object.fromEntries(values))
  .then((data) => console.log(data));

// async function getTempOfCity(city) {
//   const res = await fetch(
//     "http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no"
//   );
//   const countries = await res.json();
//   return countries.then((data) => [
//     data?.location?.name,
//     data?.current?.temp_c,
//   ]);
// }

// // cities -> Array of strings ->  [P1, P2, P3] -> Array of promises
// Promise.all(cities.map(getTempOfCity))
//   .then((values) => Object.fromEntries(values))
//   .then((data) => console.log(data));

// async function getCountriesByPopulation1(population) {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const countries = await res.json();

//   const data = countries
//     .filter((country) => country.population > population)
//     .toSorted((countryA, countryB) => countryB.population - countryA.population)
//     .map((country) => country.name.common);

//   console.log(data);
// }
