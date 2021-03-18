// finite set of vertices or nodes or points. Together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph

// collection of nodes and connections between these nodes

// USES 
// social network
// mapping, location
// routing algos
// visual hierarchy
// file system
// etc..

// TERMINOLOGY
// vertex: a node
// edge: connection between the nodes
// undirected graph: 2 ways connection, no direction associated with an edge (can go from A to B and from B to A)
// directed graph: direction assigned to the edge often represented with arrows. 1 way direction.
// weighted graph: assign a value to the edges. carry a piece of information

// we can store graphs in adjacency list(ex hash map) or matrix(array of arrays representing columns and rows)

// Big O

// Adjacency matrix is more efficient when there are lots of connections between vertixies
// don't use matrix if your data is sparse. take up more space
// slower to iterate over all edges
// faster to lookup specific edge

// Adjacency list take up less space is sparse graps
// faster to iterate over all edges
// can be slower to lookup specific edge

