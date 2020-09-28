'use strict';

const getUnique = require('get-unique-objects');
const isEqual = require('../lib/are-equals-object');

const baseObject = {
    name: 'Gastón',
    title: 'Pereyra',
    age: 33,
    isFake: true,
    languages: ['spanish', 'english'],
    superPower: null
};

const uniqueObjects = {
    name: 'Gastón',
    age: 33
};

const uniqueObjectsKeep = getUnique([baseObject, uniqueObjects], { fieldsToKeep: ['name', 'age'] });

if(!isEqual(uniqueObjectsKeep, [uniqueObjects]))
    throw new Error('KeepFields not Working');

const uniqueObjectsRemove = getUnique([baseObject, uniqueObjects], { fieldsToRemove: ['title', 'isFake', 'languages', 'superPower'] });

if(!isEqual(uniqueObjectsRemove, [uniqueObjects]))
    throw new Error('RemoveFields not Working');
    
