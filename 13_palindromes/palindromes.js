const palindromes = function (words) {
    // Convert the input to a string and remove spaces and punctuation
    let copiedwords = words.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedWord = copiedwords.split('').reverse().join('');
    if (reversedWord === copiedwords) {
        return true;
    }
 return false;
};

// Do not edit below this line
module.exports = palindromes;
