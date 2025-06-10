const sumAll = function(num1, num2) {
    let totalSum = 0;
    if ((typeof(num1) !== "number") || (typeof(num2) !== "number") || 
    (num1 < 0) || (num2 < 0) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            totalSum += i;
        }
        return totalSum  
    } else{
        for (let i = num1; i <= num2; i++) {
            totalSum += i;
        }
        return totalSum
    }


};

// Do not edit below this line
module.exports = sumAll;
