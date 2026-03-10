/**204. Count Primes
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    if (n < 2) return 0;
    
    let count = 0;
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
            for (let j = i * 2; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return count;
};

console.log(countPrimes(n = 10));
