const { serializeError} = require("serialize-error");

const serialize = (obj) => {
    const { error, output } = obj;
    if (error) {
        return JSON.stringify(serializeError(error))
    }
}

module.exports = serialize;