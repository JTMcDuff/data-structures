var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //extend to accept multiple arguments
  list.addToTail = function(value) {
     var added = Node(value);
     if (list.tail === null ) {
       list.tail = added;
       list.head = added;
     } else {
     list.tail.next = added;
     list.tail = added;
     }
     return added;
  };

  list.removeHead = function() {
    var oldHead = list.head;
    if (oldHead === null ){return oldHead; }
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var check = list.head;
    while (check.value != target) {
      if (check === list.tail) {return false;}
      if (check.value === target) {return true;}
      else {check = check.next;}
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addToTail() - Constant
 // removeHead() - Constant
 // contains() - Linear
