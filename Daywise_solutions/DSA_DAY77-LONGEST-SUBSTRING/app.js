
let prompt = require('prompt-sync')();


//*977. Squares of a Sorted Array  ☑️
var sortedSquares = function(nums){

    let ans = new Array()
 
   for(let i = 0;i<nums.length;i++){
    ans[i] = nums[i]*nums[i]
   }

   console.log(ans.sort((a,b)=> a - b));
   
  return ans 
    
}

console.log(sortedSquares( [-4,-1,0,3,10]));




/*
 *136. Single Number ✅
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      let map = new Map()
      for(let i = 0;i<nums.length;i++){
           if(map.has(nums[i])) {       
              map.set(nums[i],map.get(nums[i])+1)
           }else{
            map.set(nums[i],1)
           }
      }
      for(let i = 0;i<nums.length;i++){
         
         if( map.get(nums[i]) == 1) return nums[i]
      }
};


console.log(singleNumber([4,1,2,1,2]));
