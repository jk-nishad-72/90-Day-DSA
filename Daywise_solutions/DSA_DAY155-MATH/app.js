/*
 *231. Power of Two
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
         if (n === 1) return true; 
         if  (n<1 || n % 2 !== 0) return false;
         return  isPowerOfTwo(n /2)
};

console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(18));
