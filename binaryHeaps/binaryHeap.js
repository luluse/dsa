// similar to BST but has different rules

// maxBinaryHeap: parents are always greater than children
// minBinaryHeap: parents are always smaller than children
// left and right don't matter
// binary heap is as compact as possible
// all children of each node are as full as they can be, left children are filled out first.

// Binary heaps are used to implement priority queues, which are commonly used data structures/ they are also used with graph traversal algos

// for each  parent, index of an array n 
// left child is stored at 2n+1
// right child is at 2n+2

// for any child node at index n 
// parent is at index (n-1)/2, floor it


// pseudo code insert
// start with an empty array
// push the value into the values property on the heap
// bubble the value up to its correct spot by comparing it to its parent and swapping if parent is smaller than value
// create a var called index which is the length of the values property -1
// create a var called parentIndex which is the floor of (index-1)/2
// keep looping as long as the values element at the parentIndex is less than the values at the child index
// swap the value of the values element at the parentIndex with the value of the element property at the child index
// set the index to be the parentIndex, start over


// pseudo code Remove or ExtractMax
// swap the first value in the values property with the last value
// pop from the values properties, so you can return it in the end
// have the new root sink down to the correct spot
  // your parent index starts at 0
  // find the index of left child: 2* index+1 
  // find the index of right child: 2* index+2
  // swap root element with the largest of two childen
  // child index you swapped to now becomes the new parent index
  // keep looking and swap until niether of the children is larger than the element
  // return root


class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild,rightChild;
        let swap = null;

        if(leftChildIdx < length){
            leftChild = this.values[leftChildIdx];
            if(leftChild > element) {
                swap = leftChildIdx;
            }
        }
        if(rightChildIdx < length){
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild > element) || 
                (swap !== null && rightChild > leftChild)
            ) {
               swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
    }
}
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// Big 0 time:
// insertion: O(log n)
// removal: O(log n)
// search: 0(n)