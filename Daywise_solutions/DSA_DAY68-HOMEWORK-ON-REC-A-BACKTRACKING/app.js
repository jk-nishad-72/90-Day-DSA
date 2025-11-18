

/*
 * 47. Permutations II ✅
 * @param {number[]} nums
 * @return {number[][]}
 */
 var solve = function(nums, ans , cur, isVis , i){

 
  if(i== nums.length){
    ans.push([...cur])
    return
  }

  for(let j = 0;j<nums.length;j++){
     
      if(!isVis[j]){
        isVis[j] = true;
        cur.push(nums[j])
        solve(nums, ans, cur , isVis, i+1)
        isVis[j] = false
        cur.pop()
      }
  }
 }
var permuteUnique = function(nums) {
    
    nums.sort((a,b)=> a-b) 
    let ans = [], cur = [];

    let isVis = new Array(nums.length).fill(false)

    solve(nums, ans, cur , isVis, 0) 
    const unique = [...new Set(ans.map(JSON.stringify))].map(JSON.parse)
    return unique


};


console.log(permuteUnique([1,1,2]));
