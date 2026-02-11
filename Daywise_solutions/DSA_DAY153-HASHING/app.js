/*
 *961. N-Repeated Element in Size 2N Array
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return nums[i];
        }else{
            map.set(nums[i], 1);
        }
    }




};

console.log(repeatedNTimes([2,1,2,5,3,2]));
// console.log(repeatedNTimes([1,2,3,3]));
