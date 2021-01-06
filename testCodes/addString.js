function addStrNums(num1, num2) {
    var res = -1;
  
    try {
        res = BigInt(num1) + BigInt(num2);
    } catch(err) {}
  
    return res.toString();
}

module.exports = addStrNums;