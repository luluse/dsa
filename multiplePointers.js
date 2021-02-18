// Creating pointers that correspond to an index and move towards the beggining, end or middle.
// very efficeint for solving problems with minimal space complexity.



// write a function which accepts a sorted array of integers.
// find the first pair where the sum is Zero
// return array that includes both values or undefined if no pairs.


// Using one pointer in Beggining and one in End

// Solution 1
// Big O time : O^2
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


// write a function which accepts a sorted array of integers.
