const fibonacci = function(seq) {
    if (seq < 0) {
        return "OOPS";
    }
    if (typeof seq === 'string') {
        seq = parseInt(seq);
    }
    if (seq <= 1) {
        return seq;
    } else {
        return fibonacci(seq - 1) + fibonacci(seq - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
