/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    nextLargerElement(arr) {
        // code here
        
        let ans = [];
        let st = [];
        for(let i = arr.length-1;i>=0;i--){
            
             while(st.length != 0 && st[st.length-1] <= arr[i]){
                 st.pop()
             }
             
             if(st.length == 0 ) ans[i] = -1;
             
             else ans[i] = st[st.length-1]
             
             st.push(arr[i]) 
        }
        
        return ans
        
    }
}











let arr1 = [4,1,2]
let arr2 = [1,3,4,2] 


var nextGreaterElement = function(arr1, arr2){ 

          
    let map = new Map();
    let st = [];

    for(let i = arr2.length - 1; i >= 0; i--){

        while(st.length !=0 && st[st.length-1] <= arr2[i]){

            st.pop();
        }

        if(st.length == 0){
             map.set(arr2[i], -1);
         }
         else{
            map.set(arr2[i],st[st.length-1])
         }
         st.push(arr2[i]);
    }

    let ans = [];


    for(let i = 0;i< arr1.length;i++){
        ans.push(map.get(arr1[i]));
    }

    return ans;
    
};

console.log(nextGreaterElement(arr1,arr2));


