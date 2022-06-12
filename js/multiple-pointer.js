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
