// the function should calculatae the maximum sum of n consecutive numbers in an array
// both array and n is defined by the user

const maxSum = (arr, k) => {
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
