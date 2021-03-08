// linked list consists of nodes. and each node has a value and a pointer to another node or null.
// data structure that contains a head, tail and length
// easy to and and move from the beginning
// Good data structure for insertion and deletion

// push pseudo code (add at the end of the list):
// accepts a value, create a new node using the value passed to the function. 
// if there are no head property on the list, set head and tail to be this new node. 
// otherwise set the next propery on the tail to be the new node.
// increment length by one.
// return linked list

// pop pseudo code (remove from the end of list):
// if there is no node ( no head or length is 0) return undefined.
// loop through until you reach the tail. 
// set the next property of sencond to last node to be null. 
// set tail to be 2nd to last node. 
// decrement lenght of list by one. 
// Return value of node removed

// shifting pseudo code (remove from the beginnig of list):
// if there is no node, return undefined
// else store current head in variable
// set current head next to be head
// decrement length by one
// return value of removed node

// unshift pseudo code (adding a new node to the beginnig of list):
// accepts a value, create a nre node using the value passed to the function
// if there are no head property on the list, set head and tail to be this new node. 
// otherwise set newly created node's next property to be the current head
// set head property to be that newly created node
// increment length by one
// return linked list

// Get pseudo code (retrieving a node by it's position in the list)
// takes in a number and traverse the list that many times and return the node at that place.
// if number is negative or greater than or equal to the lenght of the list return null
// loop through the list until you reach the number and return th node atthat specific number. (use a counter)

// Set pseudo Code (changing the value of a node based on its position on the list)
// accepts a value and an index
// use get function to find that node
// if node not found return false
// if node found update value

// Insert Pseudo Code 
// takes in Index and value 
// if number is negative or greater than the lenght of the list return false
// if index is same as length push node to end of list
// if index is 0 unshift a new node to the start of list
// otherwise using the get method, access node at index-1
// set next property on that node to be the new node 
// set next propert on new node to be the previous next
// increment length of list
// return true

// RemovePseudo Code
// accepts an index
// if number is negative or greater than the lenght of the list return undefined
// if index is same as length-1, pop()
// if index is 0, shift()
// otherwise, using get() access node at index-1
// set next prperty on the node to be the next of the next's node 
// decrement length
// return value of removed node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    if (!this.head) return undefined; 
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    var current = this.head;
    var count = 0;
    while(count !== index){
      current = current.next
      count++
    }
    return current;
  }

  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    
    var newNode = new Node(val);
    var current = this.get(index);
    var previous = this.get(index-1);
    newNode.next = current;
    previous.next = newNode;
    this.length++;
    return true
  }

  remove(index){
    if(index < 0 || index > this.length) return undefined;
    if(index === this.length-1) return this.pop(val);
    if(index === 0) return this.shift(val);
    
    var previous = this.get(index-1);
    var current = previous.next;
    previous.next = current.next
    this.length--;
    return current;
  }

}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")