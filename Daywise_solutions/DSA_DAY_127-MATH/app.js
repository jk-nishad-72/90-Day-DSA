

/**507. Perfect Number
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;
    for(let i = 1;i<=Math.floor(num/2) ;i++){    
          if(num % i === 0 ) sum += i
    }
    if(sum === num ) return true
    else return false
};

console.log(checkPerfectNumber(28));
