var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};
  stackMethods.push = function(value) {
    if (this.size() === 0) {
      this.storage[0] = value;
    } else {
      this.storage[this.size()] = value;
    }
  };

  stackMethods.pop = function() {
    var popped;
    if (this.size() === 0) {
      return undefined;
    } else {
      popped = this.storage[this.size()-1];
      delete this.storage[this.size()-1];
    }
    return popped;
  };

  stackMethods.size = function() {
    var counter = 0;
    for (var key in this.storage) {
      counter ++;
    }
    return counter;
  };



