'use strict';

import { isNoneOf, isAllOf } from './utils.js';

const multipleValuesAPI = Object.freeze((inputValues) => ({
    /**
     * @param {*} possibility
     * @returns {boolean}
     */
    areAll: (possibility) => isAllOf(possibility, Array.from(inputValues)),

    /**
     * @param {*} possibility
     * @returns {boolean}
     */
    areAllNot: (possibility) => isNoneOf(possibility, Array.from(inputValues))
}));

module.exports = multipleValuesAPI;