class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  
add(item) {
  this.items.push(item);
  this.length++;

  // Sort the items array in ascending order
  this.items.sort((a, b) => a - b);
}


get(pos) {
  if (pos >= 0 && pos < this.length) {
    return this.items[pos];
  } else {
    throw new Error('OutOfBounds');
  }
}


max() {
  if (this.length === 0) {
    throw new Error('EmptySortedList');
  }
  return this.items[this.length - 1];
}


min() {
  if (this.length === 0) {
    throw new Error('EmptySortedList');
  }
  return this.items[0];
}

  sum() {}

  avg() {}
}

module.exports = SortedList;
