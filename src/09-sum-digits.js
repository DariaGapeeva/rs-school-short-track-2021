/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new Error('Not implemented');
  let sum = n;

  while (String(sum).length !== 1) {
    const temp = String(sum)
      .split('')
      .map((item) => Number(item))
      .reduce((count, item) => count + item, 0);
    sum = temp;
  }
  return sum;
}

module.exports = getSumOfDigits;
