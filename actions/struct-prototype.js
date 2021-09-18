'use strict';

const { structPrototype } = require('struct-prototype');

const myDataStructure = {
    name: 'string',
    age: 'number',
    isAdmin: 'boolean'
}

const data = {
    name: 'Gastón',
    age: 34,
    isAdmin: true
};

try{
    structPrototype(myDataStructure)(data);
} catch(error) {
    console.log(error);
    throw new Error('Struct Prototype not Working');
}
    
    
