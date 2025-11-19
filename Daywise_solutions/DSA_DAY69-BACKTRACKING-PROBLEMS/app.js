
/*
 *90. Subsets II optimise ✅ 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var solve = function(nums, ans, cur , i){
// Base Case 
    if(i == nums.length){
         ans.push([...cur])
         return
    }
 //Pick 
    cur.push(nums[i])
    solve(nums,ans , cur ,i+1)
    cur.pop()
 //Ignoring duplicates value 
 while( i+1 < nums.length && nums[i] == nums[i+1]){i++}
 // Not pick 
    solve(nums,ans , cur , i+1)
 }
var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a-b)
  let ans = []
  let cur = []
  solve(nums , ans , cur , 0)
   return ans
};



/*
 *39. Combination Sum ✅
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



/*
 *17. Letter Combinations of a Phone Number ✅ 
 * @param {string} digits
 * @return {string[]}
 */
 var solve = function(s, ans , cur, i , map){
    if(i == s.length){
        if(cur.length > 0) ans.push(cur)
        return
    }
    let tp = map.get(s.charAt(i))
    for(let j = 0 ;j<tp.length;j++){
        solve(s , ans , cur + tp.charAt(j), i+1, map)
    }
 }
var letterCombinations = function(digits) {

 let ans = []
 let map = new Map()
     map.set('2','abc')
     map.set('3','def')
     map.set('4','ghi')
     map.set('5','jkl')
     map.set('6','mno')
     map.set('7','pqrs')
     map.set('8','tuv')
     map.set('9','wxyz')
    solve(digits, ans , '', 0, map)
    return ans
};