// starting with an undirected graph

// pseudo code Add 
// write a method that accepts the name of a vertex
// should add a key to that adj list with the name of the vertex and set its value to be an empty array


class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
}
}

