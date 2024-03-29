document.querySelector("h1").innerText = "Frequency Counter";

// to calculate if given array have same frequency or not .
// array1 should be square of array2 , order of items does not matter.

// eg [1,2,3] , [4,1,9] => true
// [1,2.3] , [1,4] => false
// [1,2,3] , [4,4,1] => false

// sort and then check

const same = (a1, a2) => {
  // check if length of a1 and a2 are same, if not return false
  if (a1.length !== a2.length) {
    return false;
  }
  // sort a1 and a2 in ascending order
  a1 = a1.sort(function (i, j) {
    return i - j;
  });
  a2 = a2.sort(function (i, j) {
    return i - j;
  });
  // square each item of a1
  a1 = a1.map((i) => i * i);

  // check if a1 === a2
  return a1.join("") === a2.join("");
};
console.time("same using sort");
console.log(
  "sameFrequency",
  same(
    [
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
    ],
    [
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
    ]
  )
);
console.timeEnd("same using sort");

const same1 = (a1, a2) => {
  // check if length of a1 and a2 are same, if not return false
  if (a1.length !== a2.length) {
    return false;
  }

  // map each item of a1 into object o1 {1:1,2:1,3: 1}
  let o1 = {};
  for (const element of a1) {
    o1[element] ? o1[element]++ : (o1[element] = 1);
  }

  // loop over a2
  for (const element of a2) {
    // calculate sq root of each item
    let sqrt_a2 = Math.sqrt(element);

    // if number is not a perfect sq rt return false
    if (element !== 1 && sqrt_a2 % 1 !== 0) {
      return false;
    }

    if (o1[sqrt_a2]) {
      // decrement each value from objects key value pair of each sq root
      o1[sqrt_a2]--;
    } else {
      return false;
    }
  }

  // if each key is 0 return true, else false
  return Object.values(o1).every((i) => i === 0);
};
console.time("same using frequency counter");
console.log(
  "sameFrequency",
  same1(
    [
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2,
      3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
      1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1,
      4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4,
      2, 3, 1, 4, 2, 3, 1, 4, 2, 3,
    ],
    [
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16,
      4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1,
      16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
      1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4,
      9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9, 1, 16, 4, 9,
    ]
  )
);
console.timeEnd("same using frequency counter");

const same2 = function (a1, a2) {
  // check if length of a1 and a2 are same, if not return false
  if (a1.length !== a2.length) {
    return false;
  }
  // create an o1 and o2
  let o1 = {};
  let o2 = {};
  // loop inside a1 to get o1, the keys should be squared and values should be the count
  a1.forEach((i) => {
    o1[i * i] ? o1[i * i]++ : (o1[i * i] = 1);
  });
  // loop inside a2 to get o2
  a2.forEach((i) => {
    o2[i] ? o2[i]++ : (o2[i] = 1);
  });

  // compare if key and value pair of o1 === o2
  for (key in o1) {
    if (o1[key] !== o2[key]) {
      return false;
    }
    if (o2?.key) {
      return false;
    }
  }
  return true;
  // return true if all the items in a2 are square times of items in a1
  // else return false
};
console.log("sameFrequency2", same2([1, 3, 2, 10], [4, 1, 9, 100]));

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: (s = "rat"), (t = "car");
// Output: false;
const validAnagram = (s1, s2) => {
  // check if length of s1 and s2 are equal
  if (s1.length !== s2.length) {
    return false;
  }

  let o1 = {};
  let o2 = {};
  // map each char of o1
  for (ele of s1) {
    o1[ele]++ || (o1[ele] = 1);
  }

  // map each char of o2
  for (ele of s2) {
    o2[ele]++ || (o2[ele] = 1);
  }

  // verify if key and value of o1 is present in o2
  for (ele of s1) {
    //  check keys of o2
    if (!(ele in o2)) {
      return false;
    }
    // check values o1 and o2
    if (o1[ele] !== o2[ele]) {
      return false;
    }
  }
  return true;
};
console.log("validAnagram - ", validAnagram("rat", "car"));

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Input: arr = [1,2]
// Output: false
let uniqueOccurrences = function (a1) {
  if (a1.length < 1 || a1.length >= 1000) {
    return false;
  }
  // create object for arr
  let o1 = {};
  for (let i of a1) {
    if (i >= 1000 || i <= -1000) return false;
    o1[i] ? o1[i]++ : (o1[i] = 1);
  }
  // check if each values are unique
  //// create a set and check if set size === object size
  return new Set(Object.values(o1)).size === Object.values(o1).length;
};

console.log("uniqueOccurrences - ", uniqueOccurrences([-11, 22]));
console.log("uniqueOccurrences - ", uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.clear();

// Implement a function called, areThereDuplicates which accepts a variable number of
// arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// o(1) time complexity
function areThereDuplicates(...a) {
  return new Set(Object.values(a)).size === Object.values(a).length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
