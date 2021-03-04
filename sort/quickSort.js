// exploit the fact that arrays of 0 and 1 element are always sorted.
// workds by selecting one element called pivot and fidind where hte pivot should end up in the sorted array


// helper function for arranging elements in an array on either side of the pivot
//values less than the pivot are moved to the left of the pivot
//values greater than the pivot are moved to the right of the pivot
// the order of the elements on either side of the pivot doesn't matter
// helper does this in place (no new array)
// when complete, return the index of the pivot

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])


// quicksort pseudo code

// call the pivot helper on the array
// when helper returns the updated pivot index, recurively call the pivot helperon the sub array to the left adn to the right of that index

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){
      let pivotIndex = pivot(arr, left, right) //3
      //left
      quickSort(arr,left,pivotIndex-1);
      //right
      quickSort(arr,pivotIndex+1,right);
    }
   return arr;
} 
         
quickSort([100,-3,2,4,6,9,1,2,5,3,23])

// Big O
// time: O(n log n) for best/avg cases
// time: O(n^2)worst case
// space: O(log n)