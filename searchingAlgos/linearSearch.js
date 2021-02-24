// write a function that accepts an array and a value
// return the index at which the value exists
// if not return -1

function search(arr, val){
  for (let i = 0; i< arr.length; i++){
    if (arr[i] === val){
      return i;
    }
  }
  return -1;
  }
  
  search([1,3,4,2,6], 2)


// Big O
//time: O(n)