module.exports = {
    taskPath: "./userCodes",
    taskName: "circle.js",
    testSchemaPath: "./testSchemas",
    testSchemaName: "circle.json",
    testToExecute:"test1",
    errorExport:{
        error:"Only function are allowed to be assigned to module.exports like: module.exports=myFunction"
    },
    notArrayError: {
        error:"testSchema is supposed to contain array of tests Objects. Check whether test array is passed as string"
    } 

}
