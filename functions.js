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
// function interest(principal, rate = 3.5, years = 5) {
//   // if we give a default value for rate we have to give the same for years as well or the result will be NaN
//   return ((principal * rate) / 100) * years;
// }
// console.log(interest(10000));

// ***********************************
//GETTERS AND SETTERS METHOD IN JS
// const person = {
//   firstName: "John",
//   lastName: "Wick",

//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
// };
// console.log(person.fullName()); //read only
// console.log(`${person.firstName} ${person.lastName}`);

// getters  to access properties
// setters to change mutate them
// const person = {
//   firstName: "John",
//   lastName: "Wick",

//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// person.fullName = "John smith";
// console.log(person);

// *************************************************
//TRY AND CATCH
// const person = {
//   firstName: "John",
//   lastName: "Wick",

//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("Value is not a string");

//     const parts = value.split(" ");
//     if (parts.length !== 2) throw new Error("Enter a first and last name");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// try {
//   person.fullName = null;
// } catch (e) {
//   alert(e);
// }

// console.log(person);

// *****************************************************************
//LOCAL AND GLOBAL SCOPE
// const color = "red"; //global scope
// function start() {
//   const message = "hi"; //only accesssible inside this block
//   const color = "blue";
//   console.log(color);
// }
// function stop() {
//   const message = "bye";
// }
// start();

// // **************************************************************
// // let vs var

// function start() {
//   for (var i = 0; i < 5; i++) {
//     // this var is available anywhere inside this funtion
//     console.log(i);
//   }

//   console.log(i);
// }

// start();
//BOTTOM LINE DO NOT USE VAR THATS IT

// *****************************************************
