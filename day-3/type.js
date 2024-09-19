// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
function isObject(value) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return true;
    } else if (typeof value === 'object' && value !== null && Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    if (value.typeof === 'number') {
        return 'number';
    } else if (value.typeof === 'string') {
        return 'string';
    } else if (value.typeof === 'undefined') {
        return 'undefined';
    } else if (value.typeof === 'boolean') {
        return 'boolean';
    } else if (value.typeof === 'function') {
        return 'function';
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return 'object';
    } else if (typeof value === 'object' && value === null && !Array.isArray(value)) {
        return 'null';
    } else if (typeof value === 'object' && value !== null && Array.isArray(value)) {
        return 'array';
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}