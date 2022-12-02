const reverseString = function(str) {
    let lenStr = str.length;
    let revStr = "";
    for (let i = lenStr ; i > 0 ; i--) {
        revStr += str[i-1];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
