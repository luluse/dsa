// pseudo code depth first graph traversal RECURSIVELY
// define a function that takes in a starting vertex
// create an empty list to store end result, to return at very end
// create an obj to store visited nodes
// create helper function which accepts a vertex
    // if vertex is empty- return 
    // place the vertex it accepts into the visited obj and push that vertex into result array
    //  loop over all of the values in the adj list of that vertex
    // if any of those values have not been visited, recursively invoke helper function withthat vertex
// invoke helper function with the starting vertex
// return result arr

// pseudo code depth first graph traversal ITERATIVELY
// define a function that takes in a starting vertex
// make a stack to keep track of vertices (use list or arr)
// create an empty list to store end result, to return at very end
// push starting node into stack and mark it visited
// while stack has someting in it:
  // pop next vertex from stack
  // if vertex was not visited yet: 
      // mark it as visited
      // add it to result list
      // push its neighbors into stack
// return result arr

class Graph{
  constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
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
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex]
  }
  depthFirstRecursive(start){
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;

      (function dfs(vertex){
          if(!vertex) return null;
          visited[vertex] = true;
          result.push(vertex);
          adjacencyList[vertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  return dfs(neighbor)
              }
          });
      })(start);

      return result;
  }

  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor)
           } 
        });
    }
    return result;
}
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.depthFirstRecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
