'use strict';

const Calculator = require('./calculator');

// input from command line arguments
var inputString = process.argv;

var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// check operand exist or not
if(operand === undefined) {
    console.log('pass argument as :: [operand](add,sub,mul,cube) [num1] [num2]');
    return;
}

// call the function as per operand
switch(operand) {
    case 'add' :
        console.log(Calculator.add(num1, num2));
        break;
    case 'sub' :
        console.log(Calculator.sub(num1, num2));
        break;
    case 'mul' :
        console.log(Calculator.mul(num1, num2));
        break;
    case 'cube' :
        console.log(Calculator.cube(num1));
        break;
    default :
        console.log("Not a recognized operand");
        break;
}