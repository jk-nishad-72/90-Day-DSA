/**153. Find Minimum in Rotated Sorted Array
 * @param {number[]} nums
 * @return {number}
 */


// Brute Force Solution
// var findMin = function(nums) {
  
//     let min = nums[0];
//     for(let i = 1;i<nums.length;i++){
         
//           if(nums[i] < min){
//              min = nums[i]
//           }
//     }
//     return min
// };

// Optimal Solution
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] > nums[right]){
            left = mid + 1;
        } else {
            right = mid;
        }   
    }
    return nums[left];
}





console.log(findMin([11,13,15,17]));
