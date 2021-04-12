/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  let low = 0;
  let high = array.length - 1;
  let result;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const item = array[middle];
    if (item === value) {
      result = middle;
      break;
    } else if (item > value) {
      high = middle - 1;
    } else if (item < value) {
      low = middle + 1;
    }
  }
  return result;
}

module.exports = findIndex;
