//function declaration vs expression
function walk() {
  console.log("walk");
}

//named/anonymous function expression
let run = function () {
  console.log("run");
};
let move = run;
run();
move();
