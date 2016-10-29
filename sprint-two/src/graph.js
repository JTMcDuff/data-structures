

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
// creates an object with the key of node
// adds a key for edges

//Constant
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.

// Constant
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  else {
    return false;
  }
};

// Removes a node from the graph.

// Linear
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)) {
    delete this.nodes[node];
    for (var key in this.nodes) {
      if (this.nodes[key][node]) {
          delete this.nodes[key][node];
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// if toNode value exists in fromNode's object, return true;
// if not, return false;

// Constant
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode][toNode]) {
    return true;
  }
  else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
// make the graph's origin node have a value equal to the number of the destination.

// Constant
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.

// Linear
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode][toNode] || this.nodes[fromNode][toNode]) {
    delete this.nodes[fromNode][toNode];
    delete this.nodes[toNode][fromNode];
    return true;
  }  else {
    return undefined;
  }
};

// Pass in a callback which will be executed on each node of the graph.

// Linear
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

var graphMethods = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNode() - Constant
// contains() - Constant
// removeNode() - Linear
// hasEdge() - Constant
// addEdge() - Constant
// removeEdge() - Constant
// forEachNode() - Linear


