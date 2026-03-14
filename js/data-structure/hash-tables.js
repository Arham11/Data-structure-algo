// naive approach for basic hash.
function naiveHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.codePointAt() - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// a better hash approach
function hash(key, arrayLen) {
  let total = 0;
  const WIERD_PRIME = 31; // prime number helps to avoid the collisions;

  // only first 100 char are looped in, using Math.min
  // if the first 100 char are identical hash value might collide (we might need to have diff algo for this)
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const value = key[i].codePointAt() - 96;
    total = (total * WIERD_PRIME + value) % arrayLen;
  }
  return total;
}

class Hashtables {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Time Complexity O(1) - loops at most 100 characters, so constant
  _hash(key) {
    let total = 0;
    const WIERD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].codePointAt() - 96;
      total = (total * WIERD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // Time Complexity - Average: O(1) | Worst: O(n) - if all keys collide into one chain
  set(key, value) {
    let index = this._hash(key);

    // Separate Chaining approach to handle if there is a collision
    // With separate chaining, at each index in our array we
    // store values using a more sophisticated data
    // structure (e.g. an array or a linked list).
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  // Time Complexity - Average: O(1) | Worst: O(n) - if all keys collide into one chain
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (const item of this.keyMap[index]) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }

  // return all the keys present
  // Time Complexity O(n + m) - n = array size, m = total keys stored. O(n²) due to includes() dedup
  keys() {
    let keysArr = [];
    for (let keys of this.keyMap) {
      if (keys?.length) {
        for (let key of keys) {
          // check to avoid dupication
          if (!keysArr.includes(key[0])) keysArr.push(key[0]);
        }
      }
    }
    return keysArr;
  }

  // return all the values present
  // Time Complexity O(n + m) - n = array size, m = total keys stored. O(n²) due to includes() dedup
  values() {
    let valuesArr = [];
    for (let keys of this.keyMap) {
      if (keys?.length) {
        for (let key of keys) {
          // check to avoid dupication
          if (!valuesArr.includes(key[1])) valuesArr.push(key[1]);
        }
      }
    }
    return valuesArr;
  }
}

const ht = new Hashtables(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("plum", "#DADDDA");
