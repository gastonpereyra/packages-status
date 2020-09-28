'use strict';

const objectNormalizer = require('objects-normalizer');
const isEqual = require('../lib/are-equals-object');

const baseObject = {
    name: 'Gastón',
    title: 'Pereyra',
    age: 33,
    isFake: true,
    languages: ['spanish', 'english'],
    superPower: null
};

const normalizeObjectExpected = {
    name: 'Gastón',
    age: 33
};

const formattedKeepObject = objectNormalizer([baseObject, baseObject], { keepFields: ['name', 'age'] });

if(!isEqual(formattedKeepObject, [normalizeObjectExpected, normalizeObjectExpected]))
    throw new Error('KeepFields not Working');

const formattedRemoveObject = objectNormalizer([baseObject, baseObject], { removeFields: ['title', 'isFake', 'languages', 'superPower'] });

if(!isEqual(formattedRemoveObject, [normalizeObjectExpected, normalizeObjectExpected]))
    throw new Error('RemoveFields not Working');
    
