
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    calculateSpan(arr) {
        // code here
        let st = [];
        let ans = [];
        
        for(let i = 0;i<arr.length;i++){
             while(st.length != 0 &&  arr[st[st.length-1]] <= arr[i]){
                   st.pop();
             }
             if(st.length == 0) ans[i] = i+1;
             else { ans[i]  = i- st[st.length-1] }
             st.push(i)
        }
        
        return ans 
    }
}