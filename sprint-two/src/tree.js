var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children[this.children.length] = newChild;

};

treeMethods.contains = function(target) {
  var value = this.value;
  var result;
  if ( value === target) {
    return true;
  }
  else {
    if (this.children.length === 0) {
      return;
    }
    for ( var i = 0; i < this.children.length; i ++) {
      result = this.children[i].contains(target);
      if(result === true) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
