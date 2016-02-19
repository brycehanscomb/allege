'use strict';

require("babel-polyfill");

var singleValueAPI = require('./single-api.js');
var multipleValueAPI = require('./multiple-api.js');

/**
 * @param {...*} inputValues
 * @returns {Object.<string, function>}
 */
var allege = Object.freeze(function () {
    for (var _len = arguments.length, inputValues = Array(_len), _key = 0; _key < _len; _key++) {
        inputValues[_key] = arguments[_key];
    }

    if (inputValues.length === 1) {
        return singleValueAPI(inputValues[0]);
    } else if (inputValues.length > 1) {
        return multipleValueAPI(inputValues);
    } else {
        throw new ReferenceError('allege must be called with at least one argument.');
    }
});

module.exports = allege;