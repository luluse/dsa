// sorted data - can be compared
// excell at searching
// fast to look things up
// fast to insert things
// have 0,1 or 2 children 
// node left of parent is always less than the parent
// node right of parent is always greater than the parent


// pseudo code Insert
// create a new node 
// starting at the root
    // if no root - new node becomes the root
    // if root, check if new node is less or greater than root
// if greater check if there is a node to the right
    // if node , move to that node and repeat steps
    // if no node, add new node as right property
// if less check if there is a node to the left
    // if node, move to that node and repeat steps
    // if no node, add new node as left property
// return tree


// pseudo code Find
// starting at the root
// if no root- we're done
// if root- check if this is the value we're looking for, if found, we're done
// if not, check if value is less or greater than root
// if greater 
    // check if there is node to the right
    // if yes, move to that node and repeat steps
    // if no, we're done searching
// if less 
    // check if there is node to the left
    // if yes, move to that node and repeat steps
    // if no, we're done searching


class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }

  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    var current = this.root;
    while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this;
            } else {
              current = current.left;
            }
            
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } else {
            current = current.right;
            }
        }
    }
}

// return the node found 
find(value){
  if(this.root === null) return false;
  var current = this.root,
      found = false;
  while(current && !found){
      if(value < current.value){
          current = current.left;
      } else if(value > current.value){
          current = current.right;
      } else {
          found = true;
      }
  }
  if(!found) return undefined;
  return current;
}

//returns true or false
contains(value){
  if(this.root === null) return false;
  var current = this.root,
      found = false;
  while(current && !found){
      if(value < current.value){
          current = current.left;
      } else if(value > current.value){
          current = current.right;
      } else {
          return true;
      }
  }
  return false;
}
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);



// Big O
// Insertion ans searching: O(log n)