module.exports = {
    taskPath: "./task",
    taskName: "userCode.js",
    testSchemaPath: "./task",
    testSchemaName: "testSchema.json",
    testToExecute:"test1",
    errorExport:{
        error:"Only function are allowed to be assigned to module.exports like: module.exports=myFunction"
    },
    notArrayError: {
        error:"testSchema is supposed to contain array of tests Objects. Check whether test array is passed as string"
    },
    timedOutError: {
        error:
        {
            timedOut: "Function took too long to execute. Please check for infinite loop or try again with better solution."
        }
    },
    nothingToWriteError: {
        error:"Nothing to write to output file"
    }

}
