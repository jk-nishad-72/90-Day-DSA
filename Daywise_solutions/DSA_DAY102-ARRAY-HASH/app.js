/**3731. Find Missing Elements
 * @param {number[]} nums
 * @return {number[]}
 */

var findMissingElements = function(nums) {
     let set = new Set();
     nums.sort((a,b)=> a-b)

     let  min = nums[0]
     let max = nums[nums.length-1]
       for(let i = 0;i<nums.length ; i++){

              set.add(nums[i])
       }
       let ans = [];
       for(let i = min;i<= max ;i++){
             if(!set.has(i)) ans.push(i)
       }
    return ans
       
};

console.log(findMissingElements([5,1]));
