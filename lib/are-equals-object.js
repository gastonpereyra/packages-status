'use strict';

const assert = require('assert');

module.exports = (actual, expected) => {

    try {
        assert.deepStrictEqual(actual, expected);
        return true;
    } catch(error) {
        return false;
    }
}