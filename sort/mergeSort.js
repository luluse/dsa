// combinaison of splitting up, merging and sorting

// create an empty array tha you'll return at the end.
// take a look at the smalles value in each input array
// use while loops

// Merges two already sorted arrays
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}


                 
// break up the array into halves until you have arrays of 1 or empty
// then merge those arrays using merge function until full lenght of the origin array
// return the merged and sorted array

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10,2,76,73])



// Big O
// time: O(n log n) for best/avg/worst cases
// space: O(n)