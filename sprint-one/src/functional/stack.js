var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var sizeOf = someInstance.size();
    if (sizeOf === 0) {
      storage[0] = value;
    } else {
      storage[sizeOf] = value;
    }
  };

  someInstance.pop = function() {
    var sizeOf = someInstance.size();
    var popped = storage[sizeOf - 1];
    if(sizeOf === 0) {
      // nothing
    } else {
      delete storage[sizeOf - 1];
    }
    return popped;
  };

  someInstance.size = function() {
    var count = 0;
    for (var index in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
