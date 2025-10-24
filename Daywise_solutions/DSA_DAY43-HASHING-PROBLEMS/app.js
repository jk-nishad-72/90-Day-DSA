/**   349. Intersection of Two Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1) ;
    let ans  = [];
    for(let i = 0;i<nums2.length;i++){
 if(set.has(nums2[i]) && !ans.includes(nums2[i])){
            ans.push(nums2[i])
         }
    }
    return ans
};


/**  560. Subarray Sum Equals K
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   let sum = 0; let count = 0;
   let map = new Map();
   map.set(sum,1)
   for(let i =0;i<nums.length;i++){
        sum += nums[i];
    if(map.has(sum-k)){
        count += map.get(sum-k)
    }
    if(map.has(sum)){
        map.set(sum,(map.get(sum)+1))
    }else{
        map.set(sum,1)
    }
   }
   return count 
};



//*—Q 108. Longest Sub - Array with sum k gfg  ✅

 function longestSubarray(arr, k) {
        // code here
         
         let sum = 0;
         let map = new Map();
         
         map.set(sum,-1)
         
         let longest =0;
         
         for(let i = 0; i<arr.length;i++){
             
              sum += arr[i];
    
              if(map.has(sum-k)){
                  
                   longest = Math.max(longest,i-map.get(sum-k))
              }
              
              if(!map.has(sum)){
                  
                   map.set(sum,i)
              }
         }
        
        return longest
    }


