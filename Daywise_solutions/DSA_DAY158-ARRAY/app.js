/*
*485. Max Consecutive Ones
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     let count = 0;
     let max = 0;
     for(let i = 0;i<nums.length;i++){
               if(nums[i] === 1 ){
                 count = count + 1;
                max = Math.max(max  , count)
               }else  if (nums[i] === 0 ) {
                  count = 0;
               }
     }

     return max
};