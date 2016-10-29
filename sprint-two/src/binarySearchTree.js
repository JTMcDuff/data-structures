var BinarySearchTree = function(value) {
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;

  node.insert = binarySearchTreeMethods.insert;
  node.contains = binarySearchTreeMethods.contains;
  node.depthFirstLog = binarySearchTreeMethods.depthFirstLog;

  return node;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {

};

binarySearchTreeMethods.contains = function(value) {

};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left != null) {this.left.depthFirstLog(callback);}
  if (this.right != null) {this.right.depthFirstLog(callback);}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
