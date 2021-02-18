// Creating pointers that correspond to an index and move towards the beggining, end or middle.
// very efficeint for solving problems with minimal space complexity.



// write a function which accepts a sorted array of integers.
// find the first pair where the sum is Zero
// return array that includes both values or undefined if no pairs.


// Using one pointer in Beggining and one in End

// Solution 1
// Big O time : O(n^2)
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}

sumZero([-4,-3,-2,-1,0,1,2,5])



// Solution 2
// Big O time : O(n)
function sumZero(arr){
  let left = 0;
  let right = arr.length -1;

  while (left < right){
    let sum = arr[left] + arr[right];
    if (sum === 0){
      return [arr[left], arr[right]];
    } else if ( sum > 0){
      right --;
    } else {
      left ++;
    }
  }
  
}

sumZero([-4,-3,-2,-1,0,1,2,5])


// write a function called countUniqueValues which accepts a sorted array of integers.


// define pointer 1 and 2
// check if value of pointer 2 is same as value of pointer 1.
// if yes: move pointer two to right
// if not: move pointer 1 to right
// and reassing i value to j value
// when pointer two is at last index return index of pointer 1.

//Big 0 time: O(n)

// Solution 1
function countUniqueValues(arr){
  let left = 0;
  let right = 1;

  if(arr.length === 0 ){
    return 0
  };
  while (right < arr.length){
    if (arr[left] === arr[right]){
      right ++;
    } else {
       left ++;
       arr[left] = arr[right];
    }
  }
  return left + 1
}

countUniqueValues([1,1,2,3,3,5]);


// Solution 2
function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])