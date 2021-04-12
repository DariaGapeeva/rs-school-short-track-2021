/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;
  while (arr1.length !== 0 && arr2.length !== 0) {
    arr1.sort();
    arr2.sort();
    if (arr1[0] === arr2[0]) {
      count++;
      arr1.shift();
      arr2.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    } else {
      arr1.shift();
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
