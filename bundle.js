'use strict';

var _singleApi = require('./single-api.js');

var singleValueAPI = _interopRequireWildcard(_singleApi);

var _multipleApi = require('./multiple-api.js');

var multipleValueAPI = _interopRequireWildcard(_multipleApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

