'use strict';

module.exports = (actual, expected) => {

    if(!actual || typeof actual !== 'object')
        throw false;

    return expected.every(field => !!actual[field]);
}