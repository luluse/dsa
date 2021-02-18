// decrease time complexity
// dividing data in smaller chunks and repeat that process with the subset of data

//write a function called search that accepts a sorted array of integers and a value.
// return the index where the value is located in the array
// if value not found return -1

//Solution 1 
// Big O time: O(n)
function search( arr, val){
  for (let i =0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1
}

search([1,3,4,5], 4)

//Solution 2 
// Big O time: O Log(n)
function search( arr, val){
  let min = 0;
  let max = arr.length -1;

  while (min <= max){
    let middle = Math.floor((min + max) /2);


    if (arr[middle] < val){
      min = middle + 1;
    } else if (arr[middle] > val){
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1
}

search([1,3,4,5], 4)