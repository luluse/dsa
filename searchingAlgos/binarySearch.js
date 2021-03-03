// Only works on sorted arrays

// create a function that accepts a sorted array and a value
// crete left pointer at the start of the array
// create a right pointer at the end of the array
// while left pointer comes before the right pointer:
// create a pointer in the middle
// if you find value you want: retur index
// if value is too small: middle pointer becomes left pointer
// if value is too large: middle pointer becomes right pointer
// if value is not found, return -1



// Solution 1
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([1,2,4,6,7,8,9], 4)

// Big O
// worst and average case : O(log n)
// best case O(1)