// script.js
/* eslint-disable no-console */

var a = prompt('Enter triangle base:');
while ( !(a > 0) ) {
    a = prompt('Only positive number is valid value ' +
        'Please enter a valid value:');
}

var h = prompt('Enter triangle height');
while ( (h <= 0) || (isNaN(h) == true) ) {
    h = prompt('Only positive number is valid value ' +
        'Please enter a valid value:');
}

var triangleArea = a * h / 2;

console.log('Triangle field with base a: ' + a +
    ' and height h: ' + h + ' is equal to: ' + triangleArea + '.');
alert('Triangle field with base a: ' + a +
    ' and height h: ' + h + ' is equal to: ' + triangleArea + '.');
document.write('<p>Triangle field with base a: ' + a +
    ' and height h: ' + h + ' is equal to: ' + triangleArea + '.</p>');
