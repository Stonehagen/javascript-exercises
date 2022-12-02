const fibonacci = function(n) {
    if (n < 0 ) {
        return "OOPS";
    }
    let fibo = [1,1,];

    for ( let i = 2 ; i < n ; i++ ) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo[n-1];

};

// Do not edit below this line
module.exports = fibonacci;
