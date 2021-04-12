/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  const high = matrix.length;
  const width = matrix[0].length;
  let sum = 0;
  const array = [];
  for (let i = 0; i < high; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        array.push(j);
      } else if (!array.includes(j)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
