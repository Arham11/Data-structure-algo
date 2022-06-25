// bubble Sort
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
