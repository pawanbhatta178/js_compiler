
const {notArrayError,errorExport,taskName, taskPath, testSchemaPath, testSchemaName, testToExecute}=require("./constants.js"); //fileName that needs compiling
const { convertToObject } = require("./helper/conversion.js");
const jsCompiler = require("./jsCompiler.js");
const serialize = require("./serialize.js");
const main = () => {
    try {
       const userFunction= require(`${taskPath}/${taskName}`);//function to test
        if (typeof userFunction !== "function") {
            return errorExport;
        }
        const tests = require(`${testSchemaPath}/${testSchemaName}`);//array of tests
        const testsArray = convertToObject({itemToConvert: tests[testToExecute]});
        if (!Array.isArray(testsArray)) {
            return notArrayError;
        }
        const output=testsArray.map(test => {
            return jsCompiler(userFunction, test)
        })
        console.log(output)
        return output;
    }
    catch (err) {//any uncaught exception will be caught here
        console.log(err)
        const error = { error: err };
        return serialize(error);
    }
}
console.log(main());

