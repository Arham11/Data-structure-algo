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
console.log("bubbleSort-- ", bubbleSort([4, 5, 3, 2, 6]));

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
console.log("selectionSort-- ", selection([0, 2, 34, 22, 10, 19, 17]));

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
function sameFrequency(n1, n2) {
  // short circuit condition
  if (Math.ceil(Math.log10(n1 + 1)) !== Math.ceil(Math.log10(n2 + 1))) {
    return false;
  }

  // convert the number to string s1,s2
  const s1 = n1.toString();
  const s2 = n2.toString();
  let o1 = {};
  let o2 = {};
  // loop over s1 and map each item to Object
  for (let item of s1) {
    o1[item] ? o1[item]++ : (o1[item] = 1);
  }
  for (let item of s2) {
    o2[item] ? o2[item]++ : (o2[item] = 1);
  }
  console.log(o1, o2);
  // loop over s2 and check if key and value in s1 is present in s2 or not
  for (let item in o2) {
    // key and value
    if (!o1[item] || o1[item] !== o2[item]) {
      return false;
    }
  }
  // return false if any value mismatches
  //else return true
  return true;
}

console.log(sameFrequency(182435373, 28713233543));

// important and tough
const insertion = (a) => {
  // declare i = 1 , j = i
  // start for loop from i = 1;
  for (let i = 1; i < a.length; i++) {
    let currentValue = a[i];
    let j = i - 1;

    // while j >= 0 && a[i] > a[j]
    while (j >= 0 && a[j] > currentValue) {
      a[j + 1] = a[j];
      j--;
      //console.log(a);
    }
    a[j + 1] = currentValue;
  }
  return a;
};

console.log("insertionSort-- ", insertion([2, 1, 9, 76, 4]));

console.clear();
// more advance array
// 1. Merge Sort,

// -- merge two array
const merge = (arr1, arr2) => {
  // declare result
  // let result = [];
  // // declare i = 0 and j = 0;
  // let i = 0,
  //   j = 0;
  // // check max lenght of array
  // let max = a1.length + a2.length;

  // // loop over using while
  // //// condition i === a1.lenght && j === a2.lenght
  // while (result.length !== max) {
  //   //// if a1[i] < a2[j] push a1[i] at result, i++
  //   if (a1[i] < a2[j]) {
  //     result.push(a1[i]);
  //     i++;
  //   }
  //   //// else push a2[j] at result , j++
  //   else {
  //     result.push(a2[j]);
  //     j++;
  //   }
  // }

  // //retrun result
  // return result;
  // console.log("-----", arr1, arr2);
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};
// console.log("merge-- ", merge([1, 10, 50], [2, 14, 99, 100]));

// console.clear();
// mergeSort
const mergeSort = (a1) => {
  // divide each eleent into single element
  if (a1.length <= 1) return a1;
  let mid = Math.floor(a1.length / 2);
  let left = mergeSort(a1.slice(0, mid));
  let right = mergeSort(a1.slice(mid));
  console.log("left---", left, "right--- ", right);
  return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73]));

// [10, 24, 76, 73]
// [10, 24] -- [76 73]
// [10] - [24] - [73] - [76]

// [24, 10, 76, 73]
// [10, 24] -- [76 73]
// [10] - [24] - [73] - [76]

// the below returns the correct index of the particular item
function pivot(arr, start = 0, end = arr.length - 1) {
  console.log("arr ---", arr);
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  console.log("swap index ---", swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

const quickSort = (a1, left = 0, right = a1.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(a1, left, right);

    quickSort(a1, left, pivotIndex - 1);
    quickSort(a1, pivotIndex + 1, right);
  }
  return a1;
};

console.log("quicksort ---", quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

console.clear();

// get the digit from the positions passed
function getDigit(num, i) {
  // console.log(
  //   "get Digit ---",
  //   Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i))
  // );
  return Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i));
}
getDigit(7323, 0);

// count the number of digit in the value
function digitCount(num) {
  //console.log("digitCount ---", num.toString().length);
  return num?.toString().length;
}
digitCount(1234567);

// count the biggest number from the array
function mostDigit(arr) {
  let max = 1;
  for (let i of arr) {
    if (digitCount(i) > max) max = digitCount(i);
  }
  // console.log(max);
  return max;
}
mostDigit([1, 2, 116, 12345]);

const radixSort = (arr, largest = 0) => {
  if (largest > mostDigit(arr)) return arr;
  let a0 = [],
    a1 = [],
    a2 = [],
    a3 = [],
    a4 = [],
    a5 = [],
    a6 = [],
    a7 = [],
    a8 = [],
    a9 = [];
  for (const item of arr) {
    let digit = getDigit(item, largest);
    switch (digit) {
      case 0:
        a0.push(item);
        break;
      case 1:
        a1.push(item);
        break;
      case 2:
        a2.push(item);
        break;
      case 3:
        a3.push(item);
        break;
      case 4:
        a4.push(item);
        break;
      case 5:
        a5.push(item);
        break;
      case 6:
        a6.push(item);
        break;
      case 7:
        a7.push(item);
        break;
      case 8:
        a8.push(item);
        break;
      case 9:
        a9.push(item);
        break;
    }
  }
  debugger;

  // concat all th;;;;e digit from 0-9
  arr = [...a0, ...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7, ...a8, ...a9];
  largest++;
  return radixSort(arr, largest);
};
console.log(
  "radixSort --",
  radixSort([
    3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743,
    4127,
  ])
);
