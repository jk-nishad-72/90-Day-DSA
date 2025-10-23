
/**  645. Set Mismatch
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans = [];let i = 0;
  while(i<nums.length){
     let correctIndex = nums[i]-1;
     if(nums[i] != nums[correctIndex]){
          let temp = nums[i];
          nums[i]  = nums[correctIndex];
          nums[correctIndex] = temp
     }else i++
  }
    for(let i = 0;i<nums.length;i++){
         if(nums[i] != i+1){
           ans.push(nums[i],i+1)
         }
    }
    return ans
};


//442. Find All Duplicates in an Array

var findDuplicates = function(nums) {
     let i = 0;let ans = [];
     while(i<nums.length){
         let correctIndex = nums[i] -1;
          if(nums[i] != nums[correctIndex]){
               let temp  = nums[i] ;
             nums[i] = nums[correctIndex];
               nums[correctIndex] = temp
          }else i++
     }
     for(let i =0;i<nums.length;i++){
          if(nums[i]!=i+1) ans.push(nums[i])
     }
    return ans
 
};