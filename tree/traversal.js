// breadth-first search - horizontal search
// deptt-first search - vertical search

// Pseudo code BFS
// iteratively
// create a queue(an array) and a variable to store the values of nodes visited
// place root node in queue
// loops as long as there is something in the queue
// dequeue a node from the queue and push the value of the node into a var that stores the nodes
// if there is a left property on the node dequeued, add it to the queue
// if there is a right property on the node dequeued, add it to the queue
// return the var that stores the values


// Pseudo code DFS- preOrder
// start at root, explore entire left side then entired right side
// explore parent then visitichildren
// --> create a var to store values of visited nodes
// store root of tree in a var called current
// write helper function that accepts a node
// push the value of node to the var that store values
// if node has left property call helper function with left propert on the node 
// if node has right property call helper function with right propert on the node 
// invoke helper function with current var
// return array of values


// Pseudo code DFS- postOrder
// go straight to the most left leaf, visit node 
// then right
// then root
// explore children before visiting parents
// -->  create a var to store values of visited nodes
// store root of tree in a var called current
// write helper function that accepts a node
// if node has left property call helper function with left propert on the node 
// if node has right property call helper function with right propert on the node 
// push the value of node to the var that store values
// invoke helper function with current var
// return array of values


// Pseudo code DFS- inOrder
// go straight to the most left leaf, visit node 
// then root
// then right
// explore left child, then visit parent, then visit right child
// -->  create a var to store values of visited nodes
// store root of tree in a var called current
// write helper function that accepts a node
// if node has left property call helper function with left propert on the node 
// push the value of node to the var that store values
// if node has right property call helper function with right propert on the node 
// invoke helper function with current var
// return array of values

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {

    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();


// Big O time: same for BFS and DFS both visiting each node once
// Big O space: 
  // on a wide tree:
    // BFS has to store a lot of nodes
    // DFS is more efficient
  // on a deep tree: 
    // DFS has to store a lot of nodes
    // BFS is more efficient

// potential use cases for DFS
    // inOrder: when you want the list of values in the right order
    // preOrder: good if you copy/ store/ duplicate a tree because it's easy to reconstruct