/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  const result = email.split('').reverse().join('').split('@');
  return `${result[0].split('').reverse().join('')}`;
}

module.exports = getEmailDomain;
