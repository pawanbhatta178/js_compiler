1.  Build the container with tag 'jscompiler:1.0'

2.  Run it using following commands by sharing the folder where code to compile (named: userCode.js) and the testing schema (named: testSchema.json) is located:
    docker run --rm -v "$(pwd)"/task:/usr/src/app/task jscompiler:1.0

3.  Output.json will be created with the relevant output data after compilation.
