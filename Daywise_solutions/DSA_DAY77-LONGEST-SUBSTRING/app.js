
let prompt = require('prompt-sync')();



var sortedSquares = function(nums){

    let ans = new Array()
 
   for(let i = 0;i<nums.length;i++){
    ans[i] = nums[i]*nums[i]
   }

   console.log(ans.sort((a,b)=> a - b));
   
  return ans 
    
}

console.log(sortedSquares( [-4,-1,0,3,10]));



