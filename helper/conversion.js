
const convertToNum = ({ itemToConvert }) => {
    let num = Number(itemToConvert);
    if (isNaN(num)) {
        return itemToConvert;
    }
    return num;

}
const convertToString = ({ itemToConvert}) => {
return `${itemToConvert}`;
}

const convertToBoolean = ({ itemToConvert }) => {
 if (itemToConvert === true || itemToConvert === false) {
        return itemToConvert;
 }
if (itemToConvert.toLowerCase() === "false" ) {
    return false;
}
if (itemToConvert.toLowerCase() === "true" ) {
    return true;
}
return itemToConvert;
}

const convertToObject = ({ itemToConvert }) => {
    try {
        if (typeof itemToConvert === "object") {
            return itemToConvert;
        }
        return JSON.parse(itemToConvert);
    }
    catch (err) {
        return itemToConvert;
    }
}



module.exports = {
    convertToNum,
    convertToString,
    convertToBoolean,
    convertToObject
}