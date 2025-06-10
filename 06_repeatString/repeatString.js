const repeatString = function(word, num) {
    let concatString = ""
    for (let i = 0; i<num; i++) {
        concatString += word
    }
    if (num < 0) {
        return "ERROR"
    }
    return concatString
};

// Do not edit below this line
module.exports = repeatString;
