//function declaration vs expression
function walk() {
  console.log("walk");
}

//named/anonymous function expression
// let run = function () {
//   console.log("run");
// };
// let move = run;
// run();
// move();

// ************************************************

//HOISTING
// walk(); // since its a function we can call before the function is written
// function walk() {
//   // hoisting is the process of moving functions declaration to the file nb:done automatically
//   console.log("walk");
// }

//function expresssion
//since let run is a variable the function expression cannot be called before the run variable
// run(); //this is not gonna to work
// let run = function () {
//   console.log("run");
// };
// run();

// *****************************************************************
// function arguments
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(1, 2, 3, 4, 5));

//return sum of all the arguments
// function sum() {
//   let total = 0; //using this method we do not need arguments to add numbers
//   for (let value of arguments) total += value;

//   console.log(arguments);
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// ************************************************************
//REST OPERATOR

// function sum(...args) {
//   // this is the rest operator
//   let total = 0;
//   return args.reduce(a, (b) => a + b); //using reduce method
// }
// console.log(sum(1, 2, 3, 4, 5));

// function sum(discount, ...prices) {
//   // this is the rest operator

//   const total = prices.reduce((a, b) => a + b); //using reduce method
//   return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30));

// *************************************************************************
// Default parameters
function interest(principal, rate = 3.5, years = 5) {
  // if we give a default value for rate we have to give the same for years as well or the result will be NaN
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000));
