'use strict';

const { structPrototype } = require('struct-prototype');

const myDataStructure = {
    name: 'string',
    age: 'number',
    isAdmin: 'Boolean'
}

const data = {
    name: 'Gastón',
    age: 34,
    isAdmin: true
};

try{
    structPrototype(myDataStructure)(data);
} catch(error) {
    throw new Error('Struct Prototype not Working');
}
    
    
