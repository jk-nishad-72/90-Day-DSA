class Solution {
    // Function to replace each element of the array with its rank.
    replaceWithRank(N, arr) {
        // your code here
         let sortedArr = [...arr].sort((a,b) => a - b);
          let map = new Map();

          for(let i = 0;i< sortedArr.length ;i++){

              if(map.has(sortedArr[i]))
              {
                  map.set(sortedArr[i], map.get(sortedArr[i]));
              }else if(i==0){
                map.set(sortedArr[i], i+ 1);
              }else{
                  map.set(sortedArr[i], map.get(sortedArr[i-1]) + 1);
              }
          }

          for(let i = 0;i<arr.length;i++){

              arr[i] = map.get(arr[i])
          }
          
          console.log(arr);
          
           return arr;
    }
}


let obj = new Solution()
obj.replaceWithRank(6,[20, 15, 26, 2, 98, 6])


