/**
 * fake amount
 * @param {number} value
 * @param {string} type
 * @returns {string}
 */
export const formatCurrency = (value, type) => {
  let innerVlue = value / 100000000;
  switch (type) {
    case 'USD':
      innerVlue = (innerVlue * 64447).toFixed(2);
      return `$${innerVlue}`;
    default:
      innerVlue = innerVlue.toFixed(6);
      return `${innerVlue} BTC`;
  }
};

/**
 *
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
const getRandom = (n, m) => {
  const num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
};
/**
 *
 * @param {promise} promise
 * @returns {promise}
 */
export const awaitWrap = (promise) => {
  return promise.then((data) => [null, data]).catch((err) => [err, null]);
};
/**
 *
 * @param {array} array
 * @returns {number}
 */
export const getVlaueSum = (array) => {
  const sum = array.reduce((pre, cur) => pre + cur.value, 0);
  return sum;
};
