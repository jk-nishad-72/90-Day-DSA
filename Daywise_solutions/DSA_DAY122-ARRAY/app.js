

/*
 *1991. Find the Middle Index in Array
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const totalSum = nums.reduce((acc, num ) => acc + num , 0)
    let leftSum = 0;
    let rightSum = totalSum ;
    for(let  i = 0;i<nums.length;i++){
          rightSum -= nums[i];
          if(leftSum === rightSum ){        
              return i
          }else {
            leftSum += nums[i]
          }
    }
 return -1;
};