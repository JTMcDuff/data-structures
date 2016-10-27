var Stack = function() {
  this.storage = {}
};

Stack.prototype.push = function (value) {
  if (this.size() === 0) {
    this.storage[0] = value;
  } else {
    this.storage[this.size()] = value;
  }
}

Stack.prototype.pop = function () {
  var popped;
  if (this.size() === 0) {
    // do nothing
  } else {
    popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
  }
  return popped;
}

Stack.prototype.size = function () {
  var count = 0;
  for (var index in this.storage) {
    count++;
  }
  return count;
}

var stackMethods = new Stack();
