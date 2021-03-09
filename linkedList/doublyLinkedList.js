// push pseudo code (add at the end of the list):
// accepts a value, create a new node using the value passed to the function. 
// if there are no head property on the list, set head and tail to be this new node. 
// otherwise take current tail set the next property to be the new node.
// set previous property of new node to be old tail
// update tail property to be the new node
// increment length by one.
// return linked list


// pop pseudo code (remove from the end of list):
// if there is no node ( no head, no tail or length is 0) return undefined.
// store current tail in a var
// if the length is 1, set the head and tail to be null
// update the tail to be old tail.previous
// make new tail.next null
// set old tail.previous to be null
// decrement lenght of list by one. 
// Return value of node removed


// shifting pseudo code (remove from the beginnig of list):
// if there is no node, return undefined
// store current head in variable
// if the length is 1, set the head and tail to be null
// set current head.next to be head
// set new head previous property to null
// set old head next property to null
// decrement length by one
// return value of removed node


// unshift pseudo code (adding a new node to the beginnig of list):
// accepts a value, create a new node using the value passed to the function
// if there are no head property on the list, set head and tail to be this new node. 
// otherwise set previous property of head to be new node; 
// set next property of new node to be the current head
// set head property to be that newly created node
// increment length by one
// return linked list


// Get pseudo code (retrieving a node by it's position in the list)
// if number is negative or greater than or equal to the lenght of the list return null
// if index is less than or equal to half the length of the list, loop through the list starting from the head and toward the middle. return node when found
// if index is greater than half the length of the list, loop through the list starting from the tail and toward the middle. return node when found


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
// O(1)

// Remove Pseudo Code
// accepts an index
// if number is negative or greater than the lenght of the list return undefined
// if index is same as length-1, pop()
// if index is 0, shift()
// otherwise, using get() access node at index-1
// set next prperty on the node to be the next of the next's node 
// decrement length
// return value of removed node
// 0(1) if at beginning of array
// else 0(n)



class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
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
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.previous;
      this.tail.next = null;
      popped.previous = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let middle = (Math.floor(this.length / 2));

    if (index <= middle) {
      var current = this.head;
      var count = 0;
      while (count !== index) {
        current = current.next
        count++
      }
      return current;
    }

    if (index > middle) {
      var current = this.tail;
      var count = this.length;
      while (count !== index) {
        current = current.previous
        count--
      }
      return current;
    }
  }

}

var list = new DoublyLinkedList()
list.push("HELLO")
list.push("GOODBYE")