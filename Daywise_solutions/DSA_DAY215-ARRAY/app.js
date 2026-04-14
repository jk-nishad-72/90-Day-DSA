/**59. Spiral Matrix II
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top = 0, bottom = n-1;
    let left = 0, right = n-1;
    let ans = new Array(n).fill(0).map(() => new Array(n)); 
    let num = 1
    while(top <= bottom && left <= right){
         //* left to right 
         for(let i = left; i<= right ;i++){
            ans[top][i] = num++
         }
         top++
         //* top to bottom  
         for(let k = top; k<= bottom ;k++){
            ans[k][right] = num++
         }
         right--
//*  right  to left 
         if(top <= bottom){
            for(let j = right; j>= left ;j--){
           ans[bottom][j] = num++
         }
         bottom--
         }
         //*  b  to top 
         if(left <= right){
            for(let l = bottom; l>= top ;l--){
            ans[l][left] = num++
         }
         left++
         }
    }
    return ans
};

console.log(generateMatrix(3));
