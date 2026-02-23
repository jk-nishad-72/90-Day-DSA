
/*
 *81. Search in Rotated Sorted Array II
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function(nums, target) { 
    let f = 0, l = nums.length - 1;
    while (f <= l) {
        let m = Math.floor((f + l) / 2);
        if (nums[m] === target) return true;
        // HANDLE DUPLICATES
        if (nums[f] === nums[m] && nums[m] === nums[l]) {
            f++;
            l--;
        }
        // LEFT SORTED
        else if (nums[f] <= nums[m]) {
            if (nums[f] <= target && target < nums[m]) {
                l = m - 1;
            } else {
                f = m + 1;
            }
        }
        // RIGHT SORTED
        else {
            if (nums[m] < target && target <= nums[l]) {
                f = m + 1;
            } else {
                l = m - 1;
            }
        }
    }
    return false;
};

console.log(search(nums = [2,5,6,0,0,1,2], target = 0));
