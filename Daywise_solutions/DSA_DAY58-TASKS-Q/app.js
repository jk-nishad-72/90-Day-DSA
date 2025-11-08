
/** Next Smaller Element gfg
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

