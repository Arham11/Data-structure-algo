// 1) bubble Sort
// below bubblesort is used for decending order
// o(n2) complexity in worst case [5, 4, 3, 2, 1]
// o(n) complexity in best case [2, 1, 3, 4, 5, 6], most item are sorted but only some are not

const bubbleSort = (a) => {
  // first loop
  for (let i = 0; i < a.length; i++) {
    let noSwap = true;

    // second loop teminationg condition keeps on shrinking
    // refer below console.log
    for (let j = 0; j < a.length - (i + 1); j++) {
      console.log(a, a[j], a[j + 1]);
      if (a[j] > a[j + 1]) {
        // const temp = a[j + 1];
        // a[j + 1] = a[j];
        // a[j] = temp;
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
    console.log("--One pass--");
  }
  return a;
};
console.log(bubbleSort([4, 5, 3, 2, 6]));

// (5) [4, 5, 3, 2, 6] 4 5
// sorting-algorithm.js:13 (5) [4, 5, 3, 2, 6] 5 3
// sorting-algorithm.js:13 (5) [4, 3, 5, 2, 6] 5 2
// sorting-algorithm.js:13 (5) [4, 3, 2, 5, 6] 5 6
// sorting-algorithm.js:25 --One pass--
// sorting-algorithm.js:13 (5) [4, 3, 2, 5, 6] 4 3
// sorting-algorithm.js:13 (5) [3, 4, 2, 5, 6] 4 2
// sorting-algorithm.js:13 (5) [3, 2, 4, 5, 6] 4 5
// sorting-algorithm.js:25 --One pass--
// sorting-algorithm.js:13 (5) [3, 2, 4, 5, 6] 3 2
// sorting-algorithm.js:13 (5) [2, 3, 4, 5, 6] 3 4
// sorting-algorithm.js:25 --One pass--
// sorting-algorithm.js:13 (5) [2, 3, 4, 5, 6] 2 3
// sorting-algorithm.js:29 (5) [2, 3, 4, 5, 6]

// 2) Selection Sort
const selection = (a) => {
  // first looop
  for (let i = 0; i < a.length; i++) {
    // store min as first item
    let min = i;
    // second loop
    for (let j = i + 1; j < a.length; j++) {
      // check condition and set min value
      if (a[j] < a[min]) {
        min = j;
      }
    }
    // swap values
    if (a[i] > a[min]) {
      [a[i], a[min]] = [a[min], a[i]];
    }
  }
  return a;
};
console.log(selection([0, 2, 34, 22, 10, 19, 17]));
console.clear();

// // 1) insertions Sort
// const insertion = (a) => {
//   // first looop [2,34,22,0,10,19,17]
//   for (let i = 1; i < a.length; i++) {
//     // compare each number with previous number
//     const currentValue = a[i];
//     for (var j = i - 1; j >= 0 && j > currentValue; j--) {
//       // swap condition
//       debugger;
//       console.log("i=", a[i], "j=", a[j]);

//       //swaping
//       a[j + 1] = a[j];
//     }
//     a[j + 1] = currentValue;
//   }
//   return a;
// };
// console.log(insertion([2, 34, 10, 0]));

// [2,34,22,0,10,19,17]
//
