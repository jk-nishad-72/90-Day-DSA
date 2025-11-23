
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copy = x
    let temp = 0;
    while(x > 0){    
         let rem = x % 10 ;

         temp = (temp * 10 )+rem;

         x = parseInt(x / 10)
    }
 if(copy === temp) return true
 else return false
 
};

console.log(isPalindrome(121));


