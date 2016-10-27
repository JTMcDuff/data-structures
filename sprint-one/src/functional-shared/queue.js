var Queue = function() {
var someInstance = {};
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  return someInstance;
};

var queueMethods = {};

queueMethods.dequeue = function () {
  var popped;
  var counter = 0;
  if (this.size() === 0) {
    //
  } else {
    popped = this.storage[0];
    delete this.storage [0];
    for (var index in this.storage) {
      this.storage[counter] = this.storage[index];
      counter++;
    }
    delete this.storage[this.size() - 1];
  }
  return popped;
};

queueMethods.enqueue = function (value) {
  if (this.size() === 0) {
    this.storage[0] = value;
  } else {
    this.storage[this.size()] = value;
  }

};

queueMethods.size = function () {
  var counter = 0;
  for (index in this.storage) {
    counter++;
  }
  return counter;
};
