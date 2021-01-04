
const {convertToBoolean, convertToNum,convertToObject,convertToString } = require("./helper/conversion");

const convertType = ({itemToConvert,convertTo}) => {
    if (convertTo === "number") {
        return convertToNum({ itemToConvert });
    }
    if (convertTo === "string") {
        return convertToString({ itemToConvert });
    }
    if (convertTo === "boolean") {
        return convertToBoolean({ itemToConvert });
    }
    if (convertTo === "undefined") {
        return undefined;
    }
    if (convertTo === "object" || "array") {
        return convertToObject({itemToConvert})
    }
    return itemToConvert;
}

module.exports = { convertToNum, convertToString, convertToObject, convertToBoolean, convertType };