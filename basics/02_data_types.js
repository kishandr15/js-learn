"use strict";    // treat all JS code as newer version ES6

// alert( 3 + 3);   // we are using node.js, so alert() is available only in browser.

// Data Types 
// 1. Primitive Types

let name = "kishan";    // string
let age = 22;           // number
let isApproved = true;  // boolean
let firstName;          // undefined (typeof undefined is undefined)
let temperature = null; // null      (typeof null is object)
const id = Symbol('123')    // Symbol
const num = 99999999999n    // BigInt

//typeof is an operator, which returns the type of the variable.
console.log(typeof(temperature)); 



// 2. Reference Types

// Array
let names = ['kishan', 'kumar', 'soni'];

// Object
let person = {
    name: 'kishan',
    age: 22
};

// Functions
function greet() {
    console.log('Hello World');
}