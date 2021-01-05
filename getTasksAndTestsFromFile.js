const {notArrayError,errorExport,taskName, taskPath, testSchemaPath, testSchemaName, testToExecute}=require("./constants.js"); //fileName that needs compiling
const { convertToObject } = require("./helper/conversion.js");
const serialize = require("./serialize.js");


const getTasksAndTestsFromFile = () => {
    try {
        const userFunction = require(`${taskPath}/${taskName}`);//function to test
        if (typeof userFunction !== "function") {
            return errorExport ;
        }

        const tests = require(`${testSchemaPath}/${testSchemaName}`);//array of tests
        const testsArray = convertToObject({ itemToConvert: tests[testToExecute] });
        if (!Array.isArray(testsArray)) {
            return  notArrayError ;
        }

        return {
            userFunction,
            testsArray
        }
    }
    catch (err) {
        return JSON.parse(serialize({ error: { error: err } }));
    }
}
module.exports = getTasksAndTestsFromFile;
