// special sorting algorithm that works on ist of numbers.
// doesn't do comparisons
// instead it exploit the fact that info about the size of a number is encoded in the number of digits 
// could sort other data by turning them into binary numbers first (like a string or image...)

// pseudo code
// define a function that accepts list of numbers
// figure out how many digits the largest number has ( function most digits)
// loop from k = 0 up to the largest number of digits
// each time through: create buckets for each digit ( 0 to 9). create an array that has 10 sub arrays
// place each number in the corresponding bucket based on its kth digit
// replace our existing array with the values in our buckets from 0 to 9
// return list at the end

// to sum up : 2 loops
// outer loop that loops through the digits 
// inner loop to place each number in their bucket


// return the digit in num at the given place
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// return the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return the rumber of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// radix sort

function radix(list){
  let maxDigit = mostDigits(list);
  for (let k = 0; k < maxDigit; k++){
    let buckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < list.length; i++){
      let digit = getDigit(list[i], k);
      buckets[digit].push(list[i]);
    }
  list = [].concat(...buckets); 
  }
  return list
};

radix([32,4,21,512,289])

// Big O
// time: O(nk) for best/avg/worst case
// n: number of integers
// k: length of longest number
// space: O(n + k)