/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new Error('Not implemented');
  if (names.length === 0) return [];
  const arrNew = [names[0]];
  for (let i = 1; i < names.length; i++) {
    let count = 0;
    let countNew = 0;
    let item = names[i];
    for (let j = 0; j < i; j++) {
      if (names[i] === names[j]) {
        count++;
        item = `${names[j]}(${count})`;
      } else if (names[i] === arrNew[j]) {
        countNew++;
        item = `${arrNew[j]}(${countNew})`;
      }
    }
    arrNew.push(item);
    count = 0;
  }
  return arrNew;
}

module.exports = renameFiles;
