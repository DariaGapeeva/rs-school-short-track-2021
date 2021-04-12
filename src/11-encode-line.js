/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');

  let strResult = '';
  let current = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    current = str[i];
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      strResult = `${strResult}${count === 1 ? '' : count}${current}`;
      count = 1;
    }
  }

  return strResult;
}

module.exports = encodeLine;
