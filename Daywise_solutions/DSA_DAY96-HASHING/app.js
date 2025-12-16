
class Solution {
   
      replaceElementswithRank(N ,arr) {

          let sortedArr = [...arr].sort((a,b) => a - b);
          let map = new Map();

          for(let i = 0;i< sortedArr.length ;i++){

              if(map.has(sortedArr[i]))
              {
                  map.set(sortedArr[i], map.get(sortedArr[i]));
              }else{
                map.set(sortedArr[i], i + 1);
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
obj.replaceElementswithRank(6,[20, 15, 26, 2, 98, 6])