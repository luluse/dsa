// linked list consists of nodes. and each node has a value and a pointer to another node or null.
// data structure that contains a head, tail and length
// easy to and and move from the beginning
// Good data structure for insertion and deletion

// push pseudo code:
// accepts a value, create a new node using the value passed ti the function. if there are no head property on the list, sned head and tail to be this new node. otherwise set the next propery on the tail to be the new node. increment length by one.


class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
     var newNode = new Node(val);
     
     if(!this.head){
      this.head = newNode;
      this.tail = this.head;
     } else {
       this.tail.next = newNode;
       this.tail = newNode;
     }
     this.length++;
     return this;

  }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")