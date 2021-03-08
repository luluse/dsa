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


}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")