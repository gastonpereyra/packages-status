'use strict';

const mapItemsBy = require('map-items-by-key');
const isEqual = require('../lib/are-equals-object');

const baseObject = {
    name: 'Gastón',
    title: 'Pereyra',
    age: 33,
    isFake: true,
    languages: ['spanish', 'english'],
    superPower: null
};

const mappedSingleKeyObjectExpected = {
    [baseObject.name]: baseObject
};

const formattedKeepObject = mapItemsBy('name', [baseObject]);

if(!isEqual(formattedKeepObject, mappedSingleKeyObjectExpected))
    throw new Error('Single Key not Working');

const mappedMultipleKeyObjectExpected = {
    [baseObject.name]: {
        [baseObject.title]: baseObject
    }
};

const formattedRemoveObject = mapItemsBy(['name', 'title'], [baseObject]);

if(!isEqual(formattedRemoveObject, mappedMultipleKeyObjectExpected))
    throw new Error('Multiple Key not Working');
    
