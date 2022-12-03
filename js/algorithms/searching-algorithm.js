// linear search
const linearSearch = (a, find) => {
  for (const [index, i] of a.entries()) {
    if (i === find) {
      return index;
    }
  }
  return -1;
};

console.log(
  "linearSearch-- ",
  linearSearch([1, 3, 34, 34, 23, 1, 1, 11, 16, 13, 1116], 119)
);

let stateList = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming",
];

// binary search (follow Divide and conquer pattern)
const search = (a, find) => {
  // start and end value
  let start = 0;
  let end = a.length - 1;

  // looping condition (while loop)
  while (end >= start) {
    // find the median (middle of odd/even )
    const middle = Math.ceil((start + end) / 2);
    // if find === median return index of item
    if (find === a[middle]) {
      return middle;
    }

    // if find < median , end pointer should move up
    // end = middle
    if (find < a[middle]) {
      end = middle - 1;
    } else {
      // if find > median start pointer should move down
      start = middle + 1;
    }
  }
  // return false condition

  return -1;
};
console.log("search-- ", search([2, 5, 6, 9, 13, 15, 28, 30], 30));

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

const targetSearchNaiveApproach = (s, t) => {
  // declare the counter
  let count = 0;
  // loop over the string
  for (let i = 0; i < s.length; i++) {
    // if char at s[i] === t[0]
    if (s[i] === t[0]) {
      // loop another loop from j = 0; j < t.lenght; j++
      for (let j = 0; j < t.length; j++) {
        // console.log(s[i + j], t[j]);
        //// if char at s[i+j] !== t[j] return;
        if (s[i + j] === t[j] && j === t.length - 1) count++;
      }
    }
  }
  console.log("targetSearchNaiveApproach-- ", count);
};
targetSearchNaiveApproach("omgww0omgoozomgomgjjjomg", "omg");

// calculate count of target substring inside a long string
const searchTarget = (s, t) => {
  let count = 0;
  let ti = 0;
  // loop inside string s
  for (const i of s) {
    // if string item === target(t) item
    if (i === t[ti]) {
      ti++;
    } else {
      ti = 0;
    }
    if (ti === t.length) {
      count++;
      ti = 0;
    }
  }
  return count;
};
console.log("searchTarget-- ", searchTarget("lorie lollol loklol", "lol"));
