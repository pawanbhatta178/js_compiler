const { convertType } = require("./convertType");
const isEqual = require("lodash.isequal");
const convertArgs = require("./convertArgs");

const jsCompiler = (func, { id, arguments, argSize, argType, expectedOutput, returnType }) => {
    let returnVal;
    let params = convertArgs({ arguments, argSize, argType });

    if (argSize === 1) {
      returnVal = func(params);
    }
    else {
      returnVal = func.apply(null, params);
    }
    const expectedOutputObject = convertType({ itemToConvert: expectedOutput, convertTo: returnType });
    const passed = isEqual(expectedOutputObject, returnVal);
    return { id, arguments, argSize, argType, expectedOutput, returnVal, passed, returnType };
}

module.exports = jsCompiler;