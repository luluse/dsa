// push pseudo code (add at the end of the list):
// accepts a value, create a new node using the value passed to the function. 
// if there are no head property on the list, set head and tail to be this new node. 
// otherwise take current tail set the next property to be the new node.
// set previous property of new node to be old tail
// update tail property to be the new node
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

}

var list = new DoublyLinkedList()
list.push("HELLO")
list.push("GOODBYE")