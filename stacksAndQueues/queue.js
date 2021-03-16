// print/task processing
// uploading / downloading
// line

// first in first out

// Enqueue pseudo code
// accepts a value, create a new node
// if no node in the queue, set thsi node to be the first and last property
// otherwise set the next property on the current last to be that node 
// set last property to be that node 
// increment size of queue 
// return size

// Dequeue peudo code
// if no first property, return null
// store first property in temp var
// if first is same as last, set first and last to be null
// if nore than one node, set first property to be next property of first
// size --;
// return temp var

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
  }

  dequeue(){
      if(!this.first) return null;

      var temp = this.first;
      if(this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}

var queue = new Queue();
queue.enqueue("first")


// Big O 
// insert O(1)
// Removal O(1)
// Searching O(n)
// Access O(n)