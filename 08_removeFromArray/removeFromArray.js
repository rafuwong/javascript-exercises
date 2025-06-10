const removeFromArray = function(arr, ...str) {
    let newArr = arr.filter(item => !str.includes(item));
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
