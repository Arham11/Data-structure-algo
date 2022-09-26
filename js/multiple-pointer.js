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
var sumZero1 = (a) => {
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