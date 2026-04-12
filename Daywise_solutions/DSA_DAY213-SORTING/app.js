/**2733. Neither Minimum nor Maximum
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length <= 2 ) return -1;

    let max = -Infinity;
    let min = nums[0];

     for(let i = 0;i<nums.length ;i++){

          if(nums[i] > max ) max = nums[i]
          if(nums[i] < min ) min = nums[i]
     }

     for(let i = 0;i<nums.length;i++){

         if(nums[i] != max && nums[i] != min ) return nums[i]
     }
};

console.log(findNonMinOrMax(nums = [3,2,1,4])); 
