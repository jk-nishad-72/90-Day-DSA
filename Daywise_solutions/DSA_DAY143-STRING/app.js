/*
 *520. Detect Capital
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
    const isAllUpper = word === word.toUpperCase();
    const isAllLower = word === word.toLowerCase();
    const isFirstUpperRestLower = word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase();

    return isAllUpper || isAllLower || isFirstUpperRestLower;
    
};

// Example usage:
console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("Google")); // true
console.log(detectCapitalUse("FlaG")); // false