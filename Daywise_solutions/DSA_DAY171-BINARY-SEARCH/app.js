
/**2089. Find Target Indices After Sorting Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// use Binary Search to find the first and last index of the target in the sorted array
var targetIndices = function(nums, target) {
    
    let sorted = nums.sort((a,b) => a - b);
    let result = [];
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] === target) {
            result.push(i);
        }
    }
    return result; 
    
};

console.log(targetIndices([1,2,5,2,3], target = 2));

