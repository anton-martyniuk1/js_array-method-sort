'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareFn = (a, b) => {
    const aToString = String(a);
    const bToString = String(b);

    if (aToString > bToString) {
      return 1;
    };

    if (aToString < bToString) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareFn) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
