const add = function() {
	let sum = 0;
  let numbers = [...arguments];
  for ( i = 0 ; i < numbers.length ; i++ ) {
    sum += numbers[i];
  }
  return sum;
};

const subtract = function(a, b) {
  return a - b;
  
};

const sum = function(arr) {
  let numbers = [...arr];
  let prod = 0;

  for ( i = 0 ; i < numbers.length ; i++ ) {
    prod += numbers[i];
  }
  return prod;
};

const multiply = function(arr) {
  let numbers = [...arr];
  let prod = numbers[0];

  for ( i = 1 ; i < numbers.length ; i++ ) {
    prod *= numbers[i];
  }
  return prod;
};

const power = function(x, y) {
  return x ** y;
	
};

const factorial = function(n) {
  let fac = 1;
  for ( let i = n ; i > 0 ; i--) {
    fac *= i;
  }
  return fac;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
