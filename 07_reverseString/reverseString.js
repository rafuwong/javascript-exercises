const reverseString = function(word) {
    let wordList = word.split("");
    let reverseList = wordList.reverse();
    let rejoinString = reverseList.join("");
    return rejoinString
    }; 

// Do not edit below this line
module.exports = reverseString;
