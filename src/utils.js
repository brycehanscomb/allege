/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
export const isAnyOf = (needle, haystack) => haystack.includes(needle);

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
export const isNoneOf = (needle, haystack) => !isAnyOf(needle, haystack);

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
export const isAllOf = (needle, haystack) => haystack.every(e => e === needle);