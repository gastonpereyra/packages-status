'use strict';

const areObjectsEquals = require('are-objects-equals');
const isEqual = require('../lib/are-equals');

const baseObject = {
    name: 'Gastón',
    title: 'Pereyra',
    age: 33,
    isFake: true,
    languages: ['spanish', 'english'],
    superPower: null
};

const compareObjects = {
    name: 'Gastón',
    age: 33
};

const isEqualKeep = areObjectsEquals(baseObject, compareObjects, { fieldsToKeep: ['name', 'age'] });

if(!isEqual(isEqualKeep, true))
    throw new Error('KeepFields not Working');

const isEqualRemove = objectNormalizer(baseObject, compareObjects, { fieldsToRemove: ['title', 'isFake', 'languages', 'superPower'] });

if(!isEqual(isEqualRemove, true))
    throw new Error('RemoveFields not Working');
    
