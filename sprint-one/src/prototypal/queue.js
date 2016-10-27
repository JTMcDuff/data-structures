var Queue = function() {
   var obj = Object.create(queueMethods);
  obj.storage = {};

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if ( this.size() === 0) {
    this.storage[0] = value;
  } else {
    this.storage[this.size()] = value;
  }

};

queueMethods.dequeue = function () {
  var counter = 0;
  var popped;
  if (this.size() === 0) {
    //
  } else {
    popped = this.storage[0];
    delete this.storage[0];
    for (index in this.storage) {
      this.storage[counter] = this.storage[index];
      counter ++;
    }
    delete this.storage[this.size() -1];
  }

  return popped;
};

queueMethods.size = function  () {
  var counter = 0;
  for (index in this.storage) {
    counter ++;
  }
  return counter;
};
