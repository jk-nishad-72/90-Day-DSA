
//* —Q 133. **739. Daily Temperatures**

let prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter number of days: "));
let temperatures = new Array(n);
for(let i=0;i<n;i++){
    temperatures[i] = parseInt(prompt(`Enter temperature for day ${i+1}: `));
}

var DailyTemperature = function(temperatures){
     let st = []
     let ans = []
     for(let i = temperatures.length-1;i>=0;i--){
         while(st.length != 0 &&  temperatures[st[st.length-1]] <= temperatures[i]){
            st.pop();
         }
         if(st.length == 0){
            ans[i] = 0
         }else{
             ans[i] = st[st.length-1] -i;
         }

         st.push(i);

     }
      return ans;
}

console.log(DailyTemperature(temperatures));



/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    
    let ans = new Array(t.length).fill(0);
    
    for(let i = 0;i<t.length;i++){
        let cur = t[i] 
        for(let j = i+1;j<t.length;j++){
                 if(t[j]>cur){
                        ans[i] = j-i
                        break
                 } 
        } 
    }
     return ans
}; 



// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */




class Solution {
    // Complete the function
    Smallestonleft(arr, n) {
        // your code here
        
        let ans = new Array(n).fill(-1);
        
        for(let i = n-1;i>=0;i--){
              for(let j = i-1;j>=0;j--){
                  if(arr[j] <= arr[i]){
                       ans[i] = arr[j]
                       break
                  }
              }
        }
        
        return ans
        
    }
}
