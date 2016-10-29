

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var next = this._storage.get(index);
  if (next) {
    // check to see if the key at the current
    // index match whats being passed in
    if(next.key === k) {
      this._storage.set(index, {key: k, value: v, next: null});
    } else {
      if (next.next === null) {
        this._storage.set(index, {key: next.key, value: next.value, next: {key: k, value: v, next: null}});
      } else {
        while (next.next !== k) {
          next = next.next;
          if (next.next === null) {
            this._storage.set(index, {key: next.key, value: next.value, next: {key: k, value: v, next: null}});
          }
        }
      }
    }
  } else {
    this._storage.set(index, {key: k, value: v, next: null});
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var next = this._storage.get(index);
  if (next) {
    if (next.key === k) {
      return next.value;
    } else {
      while (next.key !== k) {
        next = next.next;
        if (next.key === k) {
          return next.value;
        }
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found;
  this._storage.each(function(value, hashIndex) {
     if (hashIndex === index) {
       found = true;
     }
  });
  if (found === true) {
    this._storage.set(index, undefined);
  }
};

var hashTableMethods = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


