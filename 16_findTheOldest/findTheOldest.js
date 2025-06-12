const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    arr.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = currentYear;
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = currentYear;
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
