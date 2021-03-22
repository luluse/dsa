// find the shortest path between two vertices on a graph

// USES
// GPS
// network routing
// airline tickets
// biology- used to model the spread of viruses


// pseudo code
// should accept a starting and ending vertex
// create and obj (called distances) and set each key to be every vertex in adj list with a value of infinity. execept starting vertex has value of 0.
// affter setting value in distance obj, add each vertex with priority of infinity to priority queue
// create anther obj called previous and set each key to be every vertex in adj list with a value of null.
// start looping as long there is something in priority queue
    // dequeue vertex from priority queue
    // if vertex is the same as ending vertex, e are done
    // otherwise loop through each value in the adj list at that vertex
        // calculate the distance to that vertex from the starting vertex
        // if distance is less that what is currently stored in our distances obj
            // update the distances obj with new lower distance
            // update previous obj to contain that vertex
            // enqueue the vertex with the total distance from the start node

class WeightedGraph {
  constructor() {
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
      this.adjacencyList[vertex1].push({node:vertex2,weight});
      this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}