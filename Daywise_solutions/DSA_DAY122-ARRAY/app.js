

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

// Example usage:
console.log(findMiddleIndex([2,3,-1,8,4])); 
console.log(findMiddleIndex([1,-1,4])); 
console.log(findMiddleIndex([2,5]));