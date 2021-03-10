// used to handle function invocation
// undo/redo operations
// routing...


// last in first out
// could use an array and built in push and pop methods.
// for better efficiency we will use linked list and build a stack from scratch

// add amd remove from beginning of singly linked list

// push pseudo code 
// accepts a value, create a new node 
// if no node in stack, set first and last property to be new node
// if at least one node, store current first property on stack
// set first property to be ew node
// set newNode.next to bed old first
// increment size of stack


// pop pseudo code 
// if no node, return null
// store in a temp var the first property on the stack
// if only one node, set first and last property to null
// if nore than one node, set first property to be the next property on the current first
// length --;
// retrun value ofremoved node;

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }
      return ++this.size;
  }
  pop(){
      if(!this.first) return null;
      var temp = this.first;
      if(this.first === this.last){
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}

var stack = new Stack()
stack.push("Jordi")
stack.push("Boo")

// Big O 
// insert O(1)
// Removal O(1)
// Searching O(n)
// Access O(n)