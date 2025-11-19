
/*
 *39. Combination Sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var solve = function(arr, ans, cur , i, target){
     if(i== arr.length){
         if(target == 0) ans.push([...cur])
         return
     }
     //Pick element function call 
     if(arr[i] <= target){
          cur.push(arr[i])
          solve(arr, ans , cur, i, target - arr[i])
          cur.pop();
     }
     //Not Pick element function call
     solve(arr, ans , cur , i+1, target)
 }
var combinationSum = function(candidates, target) {
    let ans  = [];
    let cur = [];
    solve(candidates,ans, cur, 0 , target)
    return ans
    
};