// starting with an undirected graph

// pseudo code Add Vertex
// write a method that accepts the name of a vertex
// should add a key to that adj list with the name of the vertex and set its value to be an empty array

// pseudo code Add Edges
// this function should accept two vertices
// functions should find in the adj list the key of vtx1 and push vtx2 to the array
// functions should find in the adj list the key of vtx2 and push vtx1 to the array

// pseudo code Remove Edges
// this function should accept two vertices
// function should reassign the key of vtx1 to be an array that does not contain vtx2
// function should reassign the key of vtx2 to be an array that does not contain vtx1

// pseudo code Remove Edges

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");