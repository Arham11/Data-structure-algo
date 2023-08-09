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
console.log("factorial-- ", factorial(11));

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
  "collectOddValues-- ",
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
console.log("power-- ", power(4, 2));
console.log("power-- ", power(10, 2));

// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.
const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};
console.log("productOfArray-- ", productOfArray([1, 2, 4, 100]));

// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function
const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};
console.log("recursiveRange-- ", recursiveRange(10));

// Write a recursive function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence.
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
console.log("fib-- ", fib(6));

// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.

const reverse = (str) => {
  // terminating condition
  if (str.length === 0) return "";
  // recursion
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};
console.log("reverse-- ", reverse("awesome"));

// Write a recursive function called isPalindrome which returns true if the string passed to it is a
// palindrome (reads the same forward and backward). Otherwise it returns false.

// using helper function
const isPalindrome = (str) => {
  let reverseStr;
  // reverse a string
  function helperFunction(str) {
    // terminating condition
    if (str.length === 0) return "";
    // recursion
    return str[str.length - 1] + helperFunction(str.slice(0, str.length - 1));
  }
  reverseStr = helperFunction(str);
  return str === reverseStr;
};
console.log("isPalindrome-- ", isPalindrome("tacocat"));

// using pure recursion
function palindromeUsingPureRecursion(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(
  "palindromeUsingPureRecursion-- ",
  palindromeUsingPureRecursion("tacocat")
);

// Write a recursive function called flatten which accepts an array of arrays and returns
// a new array with all values flattened.
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

const flatten = (a) => {
  let result = [];
  // loop over each item in array
  for (let i = 0; i < a.length; i++) {
    // check if first item is type of array or not
    if (Array.isArray(a[i])) {
      // console.log("array is-- ", a[i]);
      // if array recursion happens
      result = result.concat(flatten(a[i]));
      // result = [...result, ...flatten(a[i])];
      //// terminating conditon if(!arr.length) return
    } else {
      // console.log("number is-- ", a[i]);
      // if not array push to result
      result.push(a[i]);
    }
  }
  // return result and maintain it
  return result;
};

console.log("flatten-- ", flatten([1, 2, 3, [4, 5, [45, 11, 16, [123]]]]));

// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
const capitalizeFirst = (a) => {
  // declare a cap variable
  let cap = [];
  // use recursion to loop over each item
  // termination condition, if a.length === 0 return 0
  if (a.length === 0) return cap;
  // capitalize first word
  let newItem = a[0].slice(0, 1).toUpperCase() + a[0].slice(1);
  // pop first item from array
  a.shift();
  // push to cap[]
  return cap.concat(newItem).concat(capitalizeFirst(a));
};
console.log("capitalize-- ", capitalizeFirst(["car", "taco", "banana"]));

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in
// an object which may contain nested objects.
const nestedEvenSum = (obj) => {
  // declare initial sum = 0, values
  let sum = 0;
  let val = Object.values(obj);

  // loop over values on obj
  for (let i = 0; i < val.length; i++) {
    // check type of values
    if (typeof val[i] === "object" && !Array.isArray(val[i])) {
      // if type of value is "object" recursion happens and add to sum
      //console.log("obj-- ", val[i]);
      sum += nestedEvenSum(val[i]);
    }
    if (typeof val[i] === "number" && val[i] % 2 === 0) {
      //console.log("number-- ", val[i]);
      // if type of value is "number" add to sum
      sum += val[i];
    }
  }
  return sum;
};

console.log(
  "nestedEvenSum-- ",
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  })
);
console.log(
  "nestedEvenSum-- ",
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  })
);

// Write a recursive function called capitalizeWords. Given an array of words, return a new
// array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const capitalizeWords = (arr) => {
  // if length === 0 return result (termination condition)
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  // decalre result = [];
  let result = [];
  // recursion condition
  result.push(arr[0].toUpperCase());
  arr.shift();
  return result.concat(capitalizeWords(arr));
};
console.log(
  "capitalizeWords-- ",
  capitalizeWords(["i", "am", "learning", "recursion"])
);

// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings.

const stringifyNumbers = (obj) => {
  let newObj = {};
  // loop over each value inside obj
  for (let key in obj) {
    // console.log(key);
    // if type of value is a number convert to string
    if (typeof obj[key] === "number") newObj[key] = obj[key].toString();
    // if type if value is a object recursion happens
    //
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  // return obj
  return newObj;
};

console.log(
  "stringifyNumbers-- ",
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
        hi: {
          deepika: 11,
          arham: 16,
        },
      },
    },
  })
);

console.log(
  "stringifyNumbers-- ",
  stringifyNumbers({
    num: "12",
    test: [],
    data: {
      val: "43",
      info: {
        isRight: true,
        random: "663",
      },
    },
  })
);

const collectStrings = (obj) => {
  let result = [];
  let val = Object.values(obj);
  // loop over each value inside obj
  for (const v of val) {
    // if type of value is a number add to string
    if (typeof v === "string") result.push(v);
    // if type if value is a object recursion happens
    if (typeof v === "object" && !Array.isArray(v))
      return result.concat(collectStrings(v));
  }
  // return result
  return result;
};
console.log(
  "collectStrings-- ",
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  })
);

//console.clear();


// a function to count 
const countdown = function (n) {
  // termination condition
  if (n === 0 || n === -1) {
    return [];
  }
  //return the value
  return [n, ...countdown(n - 1)]      // [5, ...[4, ...[3, ...[2, ...[1]]]]]

  // or return [n].concat(...countdown(n - 1))    //[5].concat([4].concat([3].concat([2].concat([1].concat([])))))
}
console.log(countdown(5))


function rangeOfNumbers(startNum, endNum) {
  // termination condition
  if (startNum > endNum) {
    return [];
  }
  //return the value
  return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
}

console.log(rangeOfNumbers(0, 5))  // [0,1,2,3,4,5]


// The function should return an array containing repetitions of the number 
// argument. For instance, replicate(5,3) should return [5,5,5]. 
// If the times argument is negative, return an empty array.
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

const replicate = function (num, times) {
  // termination condition
  // if times < 0 return []
  if (times <= 0) return []
  // recursive calls with result
  return [num].concat(replicate(num, times - 1))
}
console.log(replicate(5, 3)); // [5,5,5]
console.log(replicate(5, -1)); // []

console.clear();

// Write a function that sums squares of numbers in list that 
// may contain more nested lists of arrays inside it.
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// with helper method
const sumSquares = function (arr) {
  // define result which is an empty array
  let result = null;
  // define a helper method
  function helper(input) {
    // loop over each variable
    for (const element of input) {
      // if typeof item is a number, push to result
      if (!Array.isArray(element)) {
        result = result + Math.pow(element, 2)
      }
      else {
        helper(element)
      }
      // else recursive call
    }
  }
  // call the helper method
  helper(arr)
  // return the result
  console.log(result);
}
sumSquares([1, 2, 3]); // 14
sumSquares([1, [2, 3]]); // 14
sumSquares([[[[[[[[[1]]]]]]]]]); // 14
sumSquares([10, [[10], 10], [10]]); // 400

console.clear()

// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

//  const nestedObject = {
//   data: {
//       info: {
//           stuff: {
//               thing: {
//                   moreStuff: {
//                       magicNumber: 44,
//                       something: 'foo2'
//                   }
//               }
//           }
//       }
//   }
// }
// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
            1: "abc"
          }
        }
      }
    }
  }
}
const containsVal = function (obj, find) {
  // loop over the object keys
  for (let i of Object.keys(obj)) {
    // if obj[keys] === object 
    if (typeof obj[i] === "object" && !Array.isArray(obj[i]) && obj[i] !== null) {
      //// recursion will happen
      return containsVal(obj[i], find);
    }
    // else terminating condition
    else {
      //// see if value === find; return true 
      if (obj[i] === find) {
        return true
      }
    }
  }
  return false;
}
containsVal(nestedObject, 44)

