


//* —Q 111.  **128. Longest Consecutive Sequence** 
// var longestConsecutive = function(nums) {
    
//     nums.sort((a,b)=> a-b)

//     console.log(nums);
    

// let longest = 0,count = 1;
//   for(let i = 0;i<nums.length;i++){
//     if(nums[i] == nums[i-1]) continue
//     else if(nums[i+1] == nums[i]+ 1 ) count++
//     else {
//          longest = Math.max(longest,count)
//          count = 1
//     } 
//   }
//   return longest
// };


// console.log(longestConsecutive([100,4,200,1,3,2]));



/**  —Q 111.  **128. Longest Consecutive Sequence** 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) { // only start at the beginning of a sequence
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
};




console.log(longestConsecutive([100,4,200,1,3,2]));
