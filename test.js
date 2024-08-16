function double(n) {
  console.log(n * 2);
}
double(5);

var result = (function (n) {
  console.log(n * 2);
})(3);
console.log(result);
