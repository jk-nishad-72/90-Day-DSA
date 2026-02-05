/*
*3379. Transformed Array
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
  let n = nums.length;
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        let newIndex = ((i + nums[i]) % n + n) % n;
        result[i] = nums[newIndex];
    }

    return result;

};