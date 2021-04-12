/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new Error('Not implemented');
  const arr = n.split('-');
  if (arr.length !== 6) return false;
  const arrBoolean = arr.map(
    (item) => !Number.isNaN(parseInt(item, 16)) && (typeof parseInt(item, 16) === 'number'),
  );
  const result = arrBoolean.reduce((item, prev) => item && prev, true);
  return result;
}
module.exports = isMAC48Address;
