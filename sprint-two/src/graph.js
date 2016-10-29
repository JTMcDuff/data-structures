

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
// creates an object with the key of node
// adds a key for edges
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  else {
    return false;
  }
};

// Removes a node from the graph.
//
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
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

var graphMethods = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */

