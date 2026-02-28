/**238. Product of Array Except Self

 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n);
    
    ans[0] =  1;
    for(let i = 1;i<n;i++){
         ans[i] = ans[i-1] * nums[i-1];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix;
        suffix *= nums[i];
    }
return ans
};
console.log(productExceptSelf( [1,2,3,4]));
