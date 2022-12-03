// the function should calculatae the maximum sum of n consecutive numbers in an array
// both array and n is defined by the user

const maxSum = (arr, k) => {
  if (arr.length < k) {
    return null;
  }
  let max = 0;
  let sum = 0;
  // find the sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  // set max as sum
  max = sum;

  // iterate the array once
  // and increment the right edge
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    // compare if sum is more than max,
    // if yes then replace
    // max with new sum values
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSum([4, 2, 1, 6], 1)); // 6
console.log(maxSum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSum([], 4)); // null
console.log(maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24

// Write a function called minSubArrayLen which accepts two parameters - an array of
// positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.
// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

const minSubArrayLen = (arr, min) => {
  // sc : if arr[0] || arr[1] > min return 1
  // declare start and sum of two items
  // loop over each item starting from arr[2] and ending at < arr.length
  // if a[i] > min return 1
  // sum += a[i] - a[i - 2]
  // if sum > ||
};

// Write a function called findLongestSubstring, which accepts a string and returns the length
// of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

console.clear();
// const findLongestSubstring = (str) => {
//   // sc : str.length = 0; return 0;
//   if (str.length === 0) return 0;
//   // declare long = "", num = 0;
//   let long = "";
//   let num = 0;
//   // start from looping the array, i=0 ; i < str.length
//   for (let i = 0; i < str.length; i++) {
//     // if long.lenght !== new Set(long).size && num < long.lenght  then num = long.lenght
//     console.log(i, str[i]);
//     long += str[i];
//     if (long.length !== new Set(long).size && num < long.length) {
//       debugger;
//       num = new Set(long).size;
//       // console.log(str[i]);
//       long = str[i];
//     }
//   }
//   return num;
// };

// important and revision
// const findLongestSubstring = function (s) {
//   const map = {};

//   let max = 0;

//   let i = 0;
//   let j = 0;

//   while (i < s.length) {
//     if (!map[s[i]]) {
//       map[s[i]] = 1;

//       max = Math.max(max, i - j + 1);
//       i++;
//     } else {
//       debugger;
//       delete map[s[j]];
//       j++;
//     }
//   }

//   return max;
// };

const findLongestSubstring = (str) => {
  // sc : str.length = 0; return 0;
  if (str.length === 0) return 0;
  // declare start=0 ; search= {}; num = 0;
  let start = 0;
  let search = {};
  let num = 0;
  let i = 0;
  // loop over each item with while and termination condition as start = str.lenght || i < str.lenght;
  while (start < str.length) {
    // if item is present on search object start++ and return num = object.keys().lenght
    // empty obj = {}
    if (search[str[i]]) {
      num < Object.keys(search).length
        ? (num = Object.keys(search).length)
        : (num = num);
      // console.log(search, Object.keys(search).join(""), start, i);
      search = {};
      start++;
      i = start;
    }
    // else item should be push at object with value as 1 and
    else {
      search[str[i]] = 1;
      i++;
    }
  }
  return num;
};

//console.log("findLongestSubstring", findLongestSubstring("")); // 0
// console.log("findLongestSubstring", findLongestSubstring("rithmschool")); // 7
console.log("findLongestSubstring", findLongestSubstring("thisisawesome")); // 6
console.log("findLongestSubstring", findLongestSubstring("thecatinthehat")); // 7
console.log("findLongestSubstring", findLongestSubstring("bbbbbb")); // 1
console.log("findLongestSubstring", findLongestSubstring("longestsubstring")); // 8
console.log("findLongestSubstring", findLongestSubstring("thisishowwedoit")); // 6
