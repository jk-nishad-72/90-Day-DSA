/**153. Find Minimum in Rotated Sorted Array
 * @param {number[]} nums
 * @return {number}
 */


// Brute Force Solution
var findMin = function(nums) {
  
    let min = nums[0];
    for(let i = 1;i<nums.length;i++){
         
          if(nums[i] < min){
             min = nums[i]
          }
    }
    return min
};





console.log(findMin([4,5,6,7,0,1,2]));
