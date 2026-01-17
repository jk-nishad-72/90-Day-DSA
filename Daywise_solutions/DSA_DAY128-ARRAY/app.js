/**989. Add to Array-Form of Integer

 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let i = num.length - 1;
    let result = [];
    let carry = 0;
    let sum = 0;

    while (i >= 0 || k > 0 || carry > 0) {
        sum = carry;
        if(i >= 0) {
            sum += num[i];
            i--;
        }
        if(k > 0) {
            sum += k % 10;
            k = Math.floor(k / 10);
        }

        sum >= 10 ? carry = 1 : carry = 0;
        result.unshift(sum % 10);


    }
    return result;

};

console.log(addToArrayForm( num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], k = 516)) // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9];
