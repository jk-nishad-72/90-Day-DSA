/**367. Valid Perfect Square
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    if(num < 0) return false;
    if(num === 0 || num === 1) return true;
    let left = 1;
    let right = num;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid * mid === num) return true;
        else if(mid * mid < num) left = mid + 1;
        else right = mid - 1;   
    }
    return false;
    

};

console.log(isPerfectSquare( num = 16));
