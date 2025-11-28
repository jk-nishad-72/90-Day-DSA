/*
 *1929. Concatenation of Array ✅
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(n*2)

    for(let i = 0;i< n ;i++){
         ans[i]  = ans[i+n] = nums[i]
    }
    return ans
};

console.log(getConcatenation([1,3,2,1]));




/*
 *1920. Build Array from Permutation ✅
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    
    let ans = new Array(nums.length)

    for(let i = 0;i<nums.length; i++){
         
          ans[i] = nums[nums[i]];
    }

    return ans
};

console.log(buildArray([5,0,1,2,3,4]));
