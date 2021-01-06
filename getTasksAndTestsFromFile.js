const { notArrayError, errorExport } = require("./constants.js"); //fileName that needs compiling
const { convertToObject } = require("./helper/conversion.js");
const { serializeError} = require("serialize-error");
const {TASK_PATH, SOURCE_FILE, TEST_SCHEMA } = process.env;

const getTasksAndTestsFromFile = () => {
    try {
        const userFunction = require(`${TASK_PATH}/${SOURCE_FILE}`);//function to test
        if (typeof userFunction !== "function") {
            return errorExport ;
        }

        const tests = require(`${TASK_PATH}/${TEST_SCHEMA}`);
        const testsArray = convertToObject({ itemToConvert: tests });
        if (!Array.isArray(testsArray)) {
            return  notArrayError;
        }

        return {
            userFunction,
            testsArray
        }
    }
    catch (err) {
        return { error: serializeError(err)};
    }
}
module.exports = getTasksAndTestsFromFile;
