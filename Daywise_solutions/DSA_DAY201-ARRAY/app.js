/*
*3190. Find Minimum Operations to Make All Elements Divisible by Three
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let i = 0;
    let count = 0;
    while(i< nums.length){
         if(nums[i] % 3 === 0){ i++}
         else if(nums[i] % 3 === 1){
             nums[i] -= 1;
             count++
         }else{
            nums[i] += 1;
            count++
         }
    }
    return count
};


console.log(minimumOperations([1 , 2, 3 ,4]));
