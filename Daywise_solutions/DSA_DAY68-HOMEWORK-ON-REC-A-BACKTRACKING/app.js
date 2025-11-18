

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





// User function Template for javascript

/*
 *Power Set ✅✅
 * @param {string} s
 * @return {string[]}
 */
class Solution {
    AllPossibleStrings(s) {
        let ans = [];
        this.solve(s, ans, "", 0);
        ans.sort();  // sort strings lexicographically
        return ans;
    }

    solve(s, ans, cur, i) {
        if (i === s.length) {
            if (cur.length !== 0) ans.push(cur);
            return;
        }

        // include s[i]
        this.solve(s, ans, cur + s[i], i + 1);

        // exclude s[i]
        this.solve(s, ans, cur, i + 1);
    }
}
