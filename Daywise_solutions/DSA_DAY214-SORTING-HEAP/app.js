/**215. Kth Largest Element in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Approach 1: Sorting - Time Complexity: O(n log n) due to sorting the array brute force approach
var findKthLargest = function(nums, k) {
         nums.sort((a,b)=> b - a  )
         return nums[k-1]
};


console.log(findKthLargest(nums = [3,2,1,5,6,4], k = 2)); // Output: 5
console.log(findKthLargest(nums = [3,2,3,1,2,4,5,5,6], k = 4)); // Output: 4

// 
