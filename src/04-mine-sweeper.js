/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new Error('Not implemented');
  const high = matrix.length;
  const width = matrix[0].length;
  const newMatrix = new Array(high)
    .fill('')
    .map(() => new Array(width).fill(0));

  for (let i = 0; i < high; i++) {
    for (let j = 0; j < width; j++) {
      let count = 0;
      if (matrix[i - 1]) {
        if (typeof matrix[i - 1][j - 1] !== 'undefined' && matrix[i - 1][j - 1]
        ) {
          count++;
        }
        if (typeof matrix[i - 1][j] !== 'undefined' && matrix[i - 1][j]) {
          count++;
        }
        if (typeof matrix[i - 1][j + 1] !== 'undefined' && matrix[i - 1][j + 1]
        ) {
          count++;
        }
      }

      if (typeof matrix[i][j - 1] !== 'undefined' && matrix[i][j - 1]) {
        count++;
      }
      if (typeof matrix[i][j + 1] !== 'undefined' && matrix[i][j + 1]) {
        count++;
      }
      if (matrix[i + 1]) {
        if (typeof matrix[i + 1][j - 1] !== 'undefined' && matrix[i + 1][j - 1]
        ) {
          count++;
        }
        if (typeof matrix[i + 1][j] !== 'undefined' && matrix[i + 1][j]) {
          count++;
        }
        if (typeof matrix[i + 1][j + 1] !== 'undefined' && matrix[i + 1][j + 1]
        ) {
          count++;
        }
      }

      newMatrix[i][j] = count;
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
