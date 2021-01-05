
const getTasksAndTestsFromFile = require("./getTasksAndTestsFromFile.js");
const jsCompiler = require("./jsCompiler.js");

const main = () => {
    
    const { testsArray, userFunction, error } = getTasksAndTestsFromFile();
    if (error) {
        return { error };
    }
        const testResult=testsArray.map(test => jsCompiler(userFunction, test))
     
        return testResult;
    }
   

console.log(main());

