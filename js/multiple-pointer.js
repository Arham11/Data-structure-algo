document.querySelector("h1").innerText = "Multiple Pointer";
// using naive method => O(N2) time complexity
const sumZero = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === 0) {
        return [a[i], a[j]];
      }
    }
  }
};
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

console.clear();

// using multiple pointer => O(N) time complexity
const sumZero1 = (a) => {
  // define i as first element and j as last
  let left = 0;
  let right = a.length - 1;
  // loop over array and find if sum of i+j is 0 or not.
  while (left < right) {
    let sum = a[left] + a[right];
    console.log(a[left], a[right]);
    // if i+j=0 return [i,j]
    if (sum === 0) {
      return [a[left], a[right]];
    }
    //// else if i+j=+ve then i++
    else if (sum > 0) {
      right--;
    }
    //// else if i+j=-ve then j--
    else {
      left++;
    }
  }
  return false;
};

// console.log(sumzero([-7, -4, -3, -1, 0, 1, 2, 3, 4, 6]));
console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]));

// count unique values in a array
const uniqueValues = (a) => {
  if (a.length === 0) {
    return 0;
  }

  if (a.length === 1) {
    return a[0];
  }

  // start from frist
  let pos = 0;
  let unique = [a[0]];

  // loop over array using while loop or for loop
  while (pos < a.length - 1) {
    // check if number and its succeeding number is same or not
    if (a[pos] !== a[pos + 1]) {
      // if number and succeeding number is not same, push 2nd item to unique
      unique.push(a[pos + 1]);
    }
    pos++;
    // increment pos
  }
  // return unique number
  return unique;
};

console.log(uniqueValues([0, 1, 1, 2, 3, 4, 5, 5, 5, 5])); // [0, 1, 2, 3, 4, 5]
console.log(uniqueValues([])); // 0
console.log(uniqueValues([1])); // 1
console.log(uniqueValues([1, 1, 1, 1, 1, 2])); // [1, 2]

const countUniqueVal = (a1) => {
  // define a unique item, define count
  let uniqueItem;
  let count = 0;
  // loop over array
  for (let item of a1) {
    // if item inside array !== unique item count++
    if (item !== uniqueItem) {
      uniqueItem = item;
      count++;
    }
  }
  return count;
};

console.log(countUniqueVal([1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 100, 200]));
console.clear();

// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair
// equals the target average. There may be more than one pair that matches the average target.
// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

const averagePair = function (a1, avgNum) {
  // define start and end
  let start = 0;
  let end = a1.length - 1;
  // loop using while with terminating cond as start < end
  while (start < end) {
    // calculate avg = (start + end) / 2
    let avg = (a1[start] + a1[end]) / 2;
    // console.log("----", avg, a1[start], a1[end]);
    // if avg === avgNum then return true
    if (avg === avgNum) return true;
    // if (avg > avgNum) then  end--
    else if (avg > avgNum) {
      end--;
    }
    // if avg < avgNum then start ++
    else {
      start++;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

console.clear();
//isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

const isSubsequence = function (find, str) {
  // declare a variable as s = 0 for find
  let s = 0;
  // for loop over str (i =0)
  for (let i = 0; i < str.length; i++) {
    // if s > find.lenght return true
    if (s > find.length - 1) {
      return true;
    }
    // if find[s] === str[i] then s++ and countinue looping
    if (find[s] === str[i]) {
      //console.log(s, find[s], str[i]);
      s++;
    }
  }
  console.log("s", s);
  // sc : if looping over str finishes and truth condition is found at last
  return s === find.length;
};
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
