// builds up the sort by gradually creating a larger left half with is always sorted

// start by picking the second element in the array
// now compare it to the element before, swap if necessary
// continue to the next element, if in the incorrect spot- iterate through the sorted portion and place the element in the correct place.
// repeat until the array is sorted


function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

// Big O time
// most cases: O(n^2)
// if nearly sorted with optimized algo: O(n)