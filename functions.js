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
function sum() {
  let total = 0; //using this method we do not need arguments to add numbers
  for (let value of arguments) total += value;

  console.log(arguments);
  return total;
}
console.log(sum(1, 2, 3, 4, 5));
