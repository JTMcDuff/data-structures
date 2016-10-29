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

// 1. Check to see if the value we pass is less than or
//    greater than the current value of our node
// -- 2a. If value is greater than current node check to see if node.right === null
// -- 3a. If node.right === null node.right == value
// -- 4a. If value is not null call function to go back to step one on right node
// -- 2b. If value is less than current node check to see if node.left === null
// -- 3b. If node.left === null node.left == value
// -- 4b. If value is not null call function to go back to step one on left node

binarySearchTreeMethods.insert = function(value) {
  var dup = true;
  var recursion = function(node) {
    if (value > node.value) {
      if (node.right === null) {
        node.right = BinarySearchTree(value);
      } else {
        recursion(node.right);
      }
    } else if (value < node.value) {
      if (node.left === null) {
        node.left = BinarySearchTree(value);
      } else {
        recursion(node.left);
      }
    } else if (value === node.value) {
      dup = false;
    }
  }
  recursion(this);
  return dup;
};

// 1 check if node.value is equal to value
//   1a if equal return true.
//   2 else, check for branches.
//       if left exists, check left.
//          if left is empty, end this recursive branch.
//       if right exists, check right.
//          if right is empty, end this recursive branch.
//  2b return results of left and right with or statement.
//  return result of recursive function.

binarySearchTreeMethods.contains = function(value) {
  var recursion = function(node) {
     var resultleft = false;
     var resultright = false;
     if (node.value === value) { return true;}
     else {
       if (node.left) { resultleft = recursion(node.left);  }
       if (node.right) { resultright = recursion(node.right); }
       return (resultleft || resultright);
     }
     };
   return recursion(this);
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left != null) {this.left.depthFirstLog(callback);}
  if (this.right != null) {this.right.depthFirstLog(callback);}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert() - Linear
// contains() - Linear
// depthFirstLog() - Linear
