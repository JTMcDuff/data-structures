var Queue = function() {
  var someInstance = {};

  var storage = {};

  someInstance.enqueue = function(value) {
    if(someInstance.size() === 0) {
      storage[0] = value;
    } else {
      storage[someInstance.size()] = value;
    }
  };

  someInstance.dequeue = function() {
    var popped;
    var count = 0;
    if(someInstance.size() === 0) {
      //
    } else {
      popped = storage[0];
      delete storage[0];
      for(var index in storage) {
        storage[count] = storage[index];
        count++;
      }
      delete storage[someInstance.size() - 1];
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
