/*
 *2951. Find the Peaks
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
   let ans = [];
   for(let i = 1 ;i< mountain.length-1;i++){
     if(mountain[i]> mountain[i-1] && mountain[i] > mountain[i+1]){
         
          ans.push(i)
     }
   }
   return ans;    
};

console.log(findPeaks([1,4,3,8,5]));
