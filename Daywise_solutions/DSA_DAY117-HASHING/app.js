

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
let map = new Map();

if(nums.length === 1) return nums
nums.sort((a,b) => a - b)
for(let i = 0;i<nums.length;i++){
      if(map.has(nums[i])){
        map.set(nums[i] , map.get(nums[i]) + 1)
      }else{
        map.set(nums[i] , 1)
      }
}

// console.log(map);

 let ans = [];
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);
    for(let i = 0;i<k;i++){
        ans.push(sorted[i][0])
    }   

  

  console.log( sorted, ans);
  
return ans

};


console.log(topKFrequent( [3,0,1,0]) , 1) 
