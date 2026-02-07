/*
*80. Remove Duplicates from Sorted Array II
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (i < 2 || nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
    
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
