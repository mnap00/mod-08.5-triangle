// script.js
/* eslint-disable no-console */

function checkValue (value) {
    while ( !(value > 0) ) {
        value = prompt('Only positive number is valid value. ' +
            'Please enter a valid value:');
    }
    return value;
}

var a = prompt('Enter triangle base:');
a = checkValue(value);

var h = prompt('Enter triangle height');
h = checkValue(value);

var triangleArea = a * h / 2;

console.log('Triangle field with base a: ' + a +
    ' and height h: ' + h + ' is equal to: ' + triangleArea + '.');
alert('Triangle field with base a: ' + a +
    ' and height h: ' + h + ' is equal to: ' + triangleArea + '.');
document.write('<p>Triangle field with base a: ' + a +
    ' and height h: ' + h + ' is equal to: ' + triangleArea + '.</p>');
