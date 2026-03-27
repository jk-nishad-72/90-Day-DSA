/**2164. Sort Even and Odd Indices Independently
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let even = [];
    let odd = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result.push(even.shift());
        } else {
            result.push(odd.shift());
        }
    }
    return result;

};

console.log(sortEvenOdd(nums = [4,1,2,3]));
