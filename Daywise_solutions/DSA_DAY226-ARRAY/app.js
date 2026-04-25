class Solution {
    sortHalf(arr) {
        // Write your code here 
        let a1 = [];
        let a2 = [];
        for(let i = 0;i<arr.length;i++){
             if(i < Math.floor(arr.length / 2)) a1.push(arr[i])
             else if(i >=Math.floor(arr.length / 2) ) a2.push(arr[i])
        }

        a1.sort((a,b) => a - b)
        a2.sort((a,b) => b - a) 
        console.log(a1 , a2)
        let res = [];
        for(let i = 0;i<a1.length;i++){
            res.push(a1[i])
        }
        for(let i = 0;i<a2.length;i++){
            res.push(a2[i])
        }
        return res;
    }
}

// Do not edit the code below.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = new Solution();

console.log(res.sortHalf(arr));



