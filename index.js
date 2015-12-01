require('./src/polyfills/Array.prototype.includes');

const curry = require('curry');

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function isAnyOf(needle, haystack) {
    return haystack.includes(needle);
}

function isNoneOf(needle, haystack) {
    return !isAnyOf(needle, haystack);
}

/**
 * @param input
 * @returns {Object.<string, function>}
 */
function allege(input) {

    /**
     * @type {function}
     * @param {Array} possibilities - The list of things that `input` could be any one of
     * @returns {boolean}
     */
    const isAnyOfBoundWithNeedle = curry(isAnyOf)(input);

    /**
     * @type {function}
     * @param {Array} possibilities - The list of things that `input` could be any one of
     * @returns {boolean}
     */
    const isNoneOfBoundWithNeedle = curry(isNoneOf)(input);

    return {
        // main API
        isAnyOf: isAnyOfBoundWithNeedle,
        isNoneOf: isNoneOfBoundWithNeedle,

        // helpful aliases
        isNot: isNoneOfBoundWithNeedle
    };
}

/**
 * @exports {allege}
 * @type {allege}
 */
module.exports = allege;