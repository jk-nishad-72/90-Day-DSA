/*
 *1394. Find Lucky Integer in an Array
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
    const frequencyMap = new Map();

    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
let ans = -1
    for (const [num, freq] of frequencyMap.entries()) {
        if (num === freq) {
            ans = Math.max(ans, num);
        }
    }
    return ans;
    
};

console.log(findLucky([2,2,2,3,3]));
