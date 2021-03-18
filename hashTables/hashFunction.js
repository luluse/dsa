// what makes a goof hash function?
// fast (constant time)
// makes sure it distributes things uniformly, evenly spread out. avoid clusters/collisions
// deterministic. same input yeld same output



// basinc hash function
    // only hashes strings
    // not constant time- depends on length of string
    // not very random, data could be clustered easily
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}


// improved hash function
    // works good with short strings right now for this exercise
    // includes prime numbers - reduces collisions
    // also having prime number array size decreases drastically the amount of collisions
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
