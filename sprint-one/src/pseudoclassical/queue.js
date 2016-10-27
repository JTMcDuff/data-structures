var Queue = function() {
  this.storage = {}
};

Queue.prototype.enqueue = function (value) {
  if (this.size() === 0) {
    this.storage[0] = value;
  } else {
    this.storage[this.size()] = value;
  }
};

Queue.prototype.dequeue = function () {
  var popped;
  var counter = 0;
  if (this.size() === 0) {
    // do nothing
  } else {
    popped = this.storage[0];
    delete this.storage[0];
    for (index in this.storage) {
      this.storage[counter] = this.storage[index];
      counter++;
    }
    delete this.storage[this.size() - 1];
  }
  return popped;
};

Queue.prototype.size = function () {
  var counter = 0;
  for (index in this.storage) {
    counter++;
  }
  return counter;
};

var queueMethods = new Queue();
