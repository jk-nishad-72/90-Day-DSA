/**371. Sum of Two Integers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
 
      let sum = 0;
    let carry = 0;

    while(b !== 0 ){
        // calculate sum
         sum = a ^ b ;
         // calculate the carry 
         carry = (a & b) << 1;
        // update the a and b 
         a = sum
         b = carry
    }
    return a || sum
    
   
    
};

console.log(getSum(1,2));
