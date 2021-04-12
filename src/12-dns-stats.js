/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  const arr = domains.map((item) => item.split('.').reverse());
  let newArr = arr.map((item) => {
    const arrItem = [];
    let currentItem = '';
    for (let i = 0; i < item.length; i++) {
      currentItem = `${currentItem}.${item[i]}`;
      arrItem.push(currentItem);
    }
    return arrItem;
  });
  newArr = newArr.flat(1);
  const obj = {};
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] in obj) {
      obj[newArr[i]] += 1;
    } else {
      obj[newArr[i]] = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
