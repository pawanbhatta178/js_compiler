const fs = require('fs');
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const { nothingToWriteError}=require("./constants");
const { OUTPUT_FILE, TASK_PATH } = process.env;
const writeToFile = ({ data, fileName }) => {
    let writableData;
    if (!data) {
        writableData = JSON.stringify(nothingToWriteError)
    }
    else {
        writableData = JSON.stringify(data);
    }
    try {
       writeFile(`${TASK_PATH}/${OUTPUT_FILE||fileName}`,writableData)
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = writeToFile;