const removeFromArray = function() {

    // get amount of arguments  and copy args to array
    let lenArgs = arguments.length;
    let remArgs = Array.prototype.slice.call(arguments, 1);
    let array = [...arguments[0]];

    if (lenArgs > 1 ) {
        let newArray = array.filter(function(v, i, arr){
            for( i = 1 ; i < lenArgs ; i++ ) {
                if (v == remArgs[i-1]){
                    return false;
                }
            }
            return true;
        })
        return newArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
