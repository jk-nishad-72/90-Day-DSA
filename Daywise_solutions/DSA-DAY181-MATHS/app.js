/*
 *263. Ugly Number
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    
    if (n <= 0) return false;
    
    const primeFactors = [2, 3, 5];
    for (let factor of primeFactors) {
        while (n % factor === 0) {
            n /= factor;
        }                       
    }
    
    return n === 1;

};

// Test cases
console.log(isUgly(6)); // true
console.log(isUgly(1)); // true
console.log(isUgly(14)); // false