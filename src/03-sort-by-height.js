/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');

  for (let t = 0; t < arr.length; t++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        let number;

        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] !== -1) {
            number = j;
            break;
          }
        }

        if (number && arr[number] < arr[i]) {
          const itemNumber = arr.splice(number, 1);

          arr.splice(i, 0, itemNumber[0]);

          const itemI = arr.splice(i + 1, 1);
          arr.splice(number, 0, itemI[0]);
        }
      }
    }
  }

  return arr;
}

module.exports = sortByHeight;
