const { convertType } = require("./convertType");
const { convertToObject } = require("./helper/conversion");

const convertArgs = ({ arguments, argSize, argType }) => {
    if ( argSize===1) {//could be primitive type or objects or arrays
       return convertType({itemToConvert:arguments, convertTo:argType})
    }
    return convertToObject({ itemToConvert:arguments });
}
module.exports = convertArgs;