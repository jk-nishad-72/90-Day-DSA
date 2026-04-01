/**453. Minimum Moves to Equal Array Elements
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let sum = 0;
    let min = nums[0];
    
    for(let i = 0;i<nums.length;i++){
         sum += nums[i];
         min = Math.min(min , nums[i])
    }

   return (sum - (min * nums.length))
};

console.log(minMoves([1,2,3]));
console.log(minMoves([1,1,1]));

