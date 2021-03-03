// two values are comparend at a time. starting a beginning. if first value is bigger thn second: swap and continue. 
// largest value bubble up at the top 

// swapping function
function swap(arr, i1, i2 ){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp
}


// Pseudo Code:
// start looping using var called i from the end of the array toward beginning
// start an inner loop with var called j from beginning until i-1
// if arr[j] is greater than arr[j+1], swap
// return sorted arr

// solution 1: 
function swap(arr, i1, i2 ){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp
}

function bubble(arr){
  for (let i = arr.length; i>0; i--){
    for(let j = 0; j< i-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1)
      }
    }
  }
  return arr;
}

bubble([3,5,2,18,6,1])

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// Solution 2 --> optimized for almost sorted arr

function swap(arr, i1, i2 ){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp
}

function bubble(arr){
  let noSwap; 
  for (let i = arr.length; i>0; i--){
    noSwap = true;
    for(let j = 0; j< i-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr;
}

bubble([3,5,2,18,26,25])


// Big O time
// most cases: O(n^2)
// if nearly sorted with optimized algo: O(n)