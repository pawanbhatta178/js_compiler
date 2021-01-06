require('dotenv').config();
const { timedOutError } = require("./constants");
const kill  = require('tree-kill');
const spawn = require('child_process').spawn;
const child = spawn('node', ['app.js']);
const writeToFile = require("./writeToFile");

const timeout = setTimeout(()=>{
  writeToFile({ data: timedOutError })
  kill(child.pid);
}, 1000);

child.on('exit', ()=>{
  clearTimeout(timeout);
  console.log('Child exited!');
});

child.stdout.on('data',  (data)=> {
  console.log('stdout: ' + data);
});

child.stderr.on('data', (data)=> {
  console.log('stderr: ' + data);
});

