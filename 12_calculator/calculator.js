const add = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(a) {
	for (let i = a; 1 > 0; i--) {
    if ((i === 0) || (i === 1)) {
      return 1;
    } else if (i > 1) {
      return i * factorial(i - 1);
    }
  }
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
