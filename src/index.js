'use strict';

import * as singleValueAPI from './single-api.js';
import * as multipleValueAPI from './multiple-api.js';

/**
 * @param {...*} inputValues
 * @returns {Object.<string, function>}
 */
const allege = Object.freeze((...inputValues) => {
    if (inputValues.length === 1) {
        return singleValueAPI(inputValues[0]);
    } else if (inputValues.length > 1) {
        return multipleValueAPI(inputValues);
    } else {
        throw new ReferenceError('allege must be called with at least one argument.');
    }
});

module.exports = allege;