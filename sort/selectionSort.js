// place small values into sorted position


//  store the first element as the minimum value you've seen so far
// compare this item to the next item in the array until you find smaller number
// if a smaller nuber is found, store it as the new minimum value and continue until end of the array
// if the minimum is not the value you started with, swap the two values
// repeat with the next element in the array

function swap(arr, i1, i2 ){
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp
}

function selection(arr){

for(let i = 0; i<arr.length; i++){
  let minimum = i;
  for(let j = i+1; j<arr.length; j++){
    if(arr[j]<arr[minimum]){
      minimum = j;
    }
  }
  if(i !== minimum) swap(arr, i, minimum)
}
return arr;
}

selection([4,2,16,3,32,15])

 // Big O time :
 // O(n^2)