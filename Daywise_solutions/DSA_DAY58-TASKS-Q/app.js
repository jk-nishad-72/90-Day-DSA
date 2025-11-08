
/** Next Smaller Element gfg ✅
 * https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1
 * 
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    nextSmallerEle(arr) {
        // code here
        let st  = [];
        let ans = [];
        
        for(let i = arr.length-1;i>=0;i--){
            
             while(st.length != 0 && st[st.length -1 ] >= arr[i]){
                 st.pop()
             }
             
             if(st.length == 0 ) ans[i] = -1;
             else {
                  ans[i] = st[st.length-1]
             }
             
             st.push(arr[i])
        }
        
        return ans
    }
}


/** Previous Greater Element ✅ 
 * https://www.geeksforgeeks.org/problems/previous-greater-element/0
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    preGreaterEle(arr) {
        // code here
    
        let st =[];
        let ans = [];
        
        for(let i= 0;i<arr.length;i++){
             
              while(st.length != 0 && st[st.length-1] <= arr[i]){
                   st.pop()
              }
              if(st.length == 0) ans[i] = -1;
              else {
                   ans[i] = st[st.length-1]
              }
              
              st.push(arr[i])
        }
        
        return ans
    }
}

 
/** 1365. How Many Numbers Are Smaller Than the Current Number ✅
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   let ans =[];
    for(let i = 0;i<nums.length;i++){
          let c = 0;
          let j = 0
        while( j<nums.length ){
             if(nums[i]>nums[j] && j != i) c++
             j++
        }
        ans[i] = c
    }
    return ans
};


