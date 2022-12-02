const palindromes = function (str) {
    let revStr = str.split("").reverse().join("").replace(/[^\w]/mg, "");
    let forStr = str.replace(/[^\w]/mg, "");
    
    console.log(revStr, forStr);
    return forStr.toLowerCase() == revStr.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
