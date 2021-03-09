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
// use get function to find that node, store it in a var
// if node not found return false
// if node found update value and return true


// Insert Pseudo Code 
// takes in Index and value 
// if number is negative or greater than the lenght of the list return false
// if index is same as length push node to end of list
// if index is 0 unshift a new node to the start of list
// otherwise using the get method, access node at index-1
// set next property on that node to be the new node 
// set next and previous property on correct nodes to link together
// increment length of list
// return true
// O(1)

// Remove Pseudo Code
// accepts an index
// if number is negative or greater than the lenght of the list return undefined
// if index is same as length-1, pop()
// if index is 0, shift()
// otherwise, use get() 
// update next and previous properties on nodes from the list
// set prev and next props on tha removed node to null
// decrement length
// return value of removed node
// 0(1) --> much faster than in singly linked list


// Searching 0(n)
// Access 0(n)



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

  set(index, val){
    var current = this.get(index);
    if (current !== null){
      current.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.previous = beforeNode;
    newNode.next = afterNode;
    afterNode.previous = newNode;

    this.length++;
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop(val);
    if (index === 0) return this.shift(val);

    var remove = this.get(index);
    remove.previous.next = remove.next;
    remove.next.previous = remove.previous;
   
    remove.next = null;
    remove.previous = null;
    this.length--;
    return remove;
  }

}

var list = new DoublyLinkedList()
list.push("HELLO")
list.push("GOODBYE")