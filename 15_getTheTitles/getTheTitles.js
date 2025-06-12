const getTheTitles = function(arr) {
    // For loop without map
    let bookTitles = [];
    for (let book of arr) {
        bookTitles.push(book.title);
    }
    return bookTitles

    // // Map Method
    // return arr.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
