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
  let left = a[0];
  let right = a.length - 1;
  while (right > left) {
    sum = a[left] + a[right];
    if (sum === 0) {
      return [a[left], a[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
console.log(sumZero1([-7, -4, -3, -1, 0, 1, 2, 3, 4, 6]));

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
