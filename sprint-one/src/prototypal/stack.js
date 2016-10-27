var Stack = function() {

  var obj = Object.create(stackMethods);
  obj.storage = {};

  return obj;
};

var stackMethods = {};

stackMethods.push = function (value) {
  if(this.size() === 0) {
    this.storage[0] = value;
  } else {
    this.storage[this.size()] = value;
  }
};

stackMethods.pop = function () {
  var popped;
  if(this.size() === 0) {
    // do nothing
  } else {
    popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
  }
  return popped;
};

stackMethods.size = function () {
  var count = 0;
  for (var index in this.storage) {
    count++;
  }
  return count;
}
