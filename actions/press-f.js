'use strict';

const F = require('press-f');
const isEqual = require('../lib/are-equal');

const MESSAGE = 'Some message';
const ERROR_NAME = 'Some Name'

try {
    new F(MESSAGE, ERROR_NAME);
} catch(error) {

    if(error instanceof Error)
        throw Error('Custom Error is not Error instance');
    
    if(!isEqual(error.message, MESSAGE))
        throw Error('Custom Message is not Working');

    if(!isEqual(error.name, ERROR_NAME))
        throw Error('Custom Name is not Working');
}
