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

}

var list = new DoublyLinkedList()
list.push("HELLO")
list.push("GOODBYE")