 
/*
 *—Q. 139.46. Permutations ✅
 * @param {number[]} nums
 * @return {number[][]}
 */
var solve= function(nums, ans, current , isVis, i){
    if(i == nums.length){ 
        ans.push([...current])
        return 
    }
    for(let j = 0;j<nums.length;j++){
        if(!isVis[j]){
            isVis[j] = true;
            current.push(nums[j])
            solve(nums, ans, current , isVis, i+1)
            isVis[j] = false;
            current.pop()
        }
    }
   }
 var permute = function(nums){
    let ans = [];
    let cur = [];
    let isVis = new Array(nums.length).fill(false)
    solve(nums, ans, cur,isVis,0)
    return ans
};