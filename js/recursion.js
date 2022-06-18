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
