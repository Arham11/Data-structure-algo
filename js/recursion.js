// a basic example for recursion
// console number in descending order
const basicRecursion = (num) => {
  // terminate a function
  if (num === 0) {
    return;
  }
  // console.log(num);
  num--;
  // recursive call
  basicRecursion(num);
};
basicRecursion(5);

// calculate sum of the range from 0 to the number provided
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

sumRange(3);
// sumRange(3);
//      return 3 + sumRange(2)
//                 return 2 + sumRange(1)
//                                return 1

// factorial
const factorial = (num) => {
  // terminating condition
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(11));

// find odd numbers using recursion (helper function)

const collectOddValues = (a) => {
  // declare a result empty array
  let result = [];

  // declare a helper function
  function herlperFunction(helperInput) {
    // teminating condition
    if (helperInput.length === 0) {
      return;
    }
    // check odd condition for first array item
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // remove first item from since it is already check above
    helperInput.splice(0, 1);
    return herlperFunction(helperInput);
  }

  // execute helper function
  herlperFunction(a);

  // return result
  return result;
};
console.log(
  collectOddValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 233, 345, 666])
);

// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// do not worry about negative bases and exponents.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, expo) {
  // terminating condition: if expo === 0 return result
  if (expo === 0) return 1;
  // recursion: return base * power(base,expo-1)
  return base * power(base, expo - 1);
}
console.log(power(4, 2));
console.log(power(10, 2));

// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.
const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};
console.log(productOfArray([1, 2, 4, 100]));

// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function
const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};
console.log(recursiveRange(10));

// Write a recursive function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence.
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(6));

console.clear();
