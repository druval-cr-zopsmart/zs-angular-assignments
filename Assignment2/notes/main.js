// notes for reference

// -- scopes --

function outerFun(){
  var funScope = 10; // function scope
  if(true){
    let inner1st = 20; // block scope, work only with let and const
  }
  console.log(inner1st);
}

outerFun();


function outerFun(){
  // console.log(funScope); // funScope declared as a let will throw error
  let funScope = 10;
  // var funScope = 20; // cant redeclare if decalred using let
  console.log(funScope);

	// this will be function scope, it won't polute global add function declared in index.html
  let add = (a, b, c) => {
    return a + b + c;
  };
}

outerFun();

// -- hoisting --
/* 
	Hoisting is the default behavior of moving all the declarations at the top of the scope before 
	code execution. 
*/

// example 1
console.log(x); // undefined (if we use 'let' it'll throw error)
var x = 'eva';

// example 2
funA();

function funA() { // this is function declaration, this will hoisted, similar to var
  console.log('funA');
}

console.log(funB); // this would be undefined
// funB() // throw error 

var funB = function(){ // this function expression, this not hoisted
  console.log('funB');
}

// -- closure --

// example 1
/*
	Inner function creates a closure over the execution context variable environment of the parent function
	Thus event though the execution context of the parent function is gone, the closure for inner function
	will be there
*/
let count = 0;

function fun1(x) {
  return function fun2(y) {
    return x + y;
  }
}

let a = fun1(10);
console.log(a(5));
console.log(a(5));

// example 2
function outerFun(){
  let sum = 10; // outerScoped variable
  function inner(num){
    sum = sum + num; // inner function can access outerScoped variable
    console.log('inner', sum);
  }
  return inner;
}

var inner = outerFun();
inner(5); // 15 // explicit closure
inner(5); // 20
inner(5); // 25

// -- binding --

// example 1
var key1 = 50;

const obj = {
  key1: "abc",
  printKey1: function(){
    console.log(this.key1);
  }
}

obj.printKey1(); // abc
const printKey1 = obj.printKey1; // assigning function to new variable
printKey1(); // 50

const printKey2 = obj.printKey1.bind(obj); // assigning function to new variable
printKey2(); // output: abc

// example 2
var key1 = 50;

const obj5 = {
  key1: "abc",
  printKey1: () => {
    console.log(this.key1);
  }
}

// the arrow function doesn’t have its own 'this' value.
// 'this' in the arrow function in this example references the global object.
obj5.printKey1(); // 50