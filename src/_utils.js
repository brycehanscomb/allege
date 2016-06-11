/**
 * @description Determine if `needle` exists anywhere in `haystack`
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
export const isAnyOf = (needle, haystack) => haystack.includes(needle);

/**
 * @description Determine if `needle` does not exist anywhere in `haystack`
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
export const isNoneOf = (needle, haystack) => !isAnyOf(needle, haystack);

/**
 * @description Determine if all items in `haystack` are strictly equal to `needle`
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
export const isAllOf = (needle, haystack) => haystack.every(e => e === needle);