
/*
 *90. Subsets II
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

    // Not pick 

    solve(nums,ans , cur , i+1)

 }
var subsetsWithDup = function(nums) {

    nums.sort((a,b) => a-b)
    
  let ans = []
  let cur = []
  solve(nums , ans , cur , 0)
  

  const unique = [ 
     ...new  Set(ans.map(JSON.stringify))
  ].map(JSON.parse)


   return unique
};

console.log(subsetsWithDup([4,4,4,1,4]));
