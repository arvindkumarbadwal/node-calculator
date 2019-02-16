'use strict';

const assert = require('assert');

module.exports.add = (num1, num2) =>  {

    try {
        assert.ok(!isNaN(num1), "Num 1 must be an number.");
        assert.ok(!isNaN(num2), "Num 2 must be an number.");

        return parseFloat(num1) + parseFloat(num2);
    }
    catch(e) {
        return e.message;
    }
}

module.exports.sub = (num1, num2) =>  {
    try {
        assert.ok(!isNaN(num1), "Num 1 must be an number.");
        assert.ok(!isNaN(num2), "Num 2 must be an number.");

        return parseFloat(num1) - parseFloat(num2);
    }
    catch(e) {
        return e.message;
    }
}

module.exports.mul = (num1, num2) =>  {
    try {
        assert.ok(!isNaN(num1), "Num 1 must be an number.");
        assert.ok(!isNaN(num2), "Num 2 must be an number.");

        return parseFloat(num1) * parseFloat(num2);
    }
    catch(e) {
        return e.message;
    }
}

module.exports.cube = (num1) => {
    try {
        assert.ok(!isNaN(num1), "Num 1 must be an number.");

        return parseFloat(num1) * parseFloat(num1) * parseFloat(num1);
    }
    catch(e) {
        return e.message;
    }
}
