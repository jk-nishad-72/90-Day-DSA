/**326. Power of Three
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    if (n < 1) return false;
    
    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
};
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false