const getTasksAndTestsFromFile = require("./getTasksAndTestsFromFile.js");
const jsCompiler = require("./jsCompiler.js");
const writeToFile = require("./writeToFile");
const { serializeError} = require("serialize-error");

const main = () => {
    const { testsArray, userFunction, error } = getTasksAndTestsFromFile();
    if (error) {
        return { error };
    }
    try {
        const testResult = testsArray.map(test => {
            return jsCompiler(userFunction, test);
        })
        return { testResult };
    }
    catch (err) {
        return { error:serializeError(err) };
    }
}
  
writeToFile({ data: main() });


