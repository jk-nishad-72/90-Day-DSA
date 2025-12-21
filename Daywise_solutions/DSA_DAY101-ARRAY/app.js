
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    
      let ans = [];

      for(let i = 0;i<grid.length;i++){

          for(let j = 0;j<grid[0].length;j++){
              
              ans.push(grid[i][j]);
          }
      }
    
      console.log(ans.sort((a,b)=>a-b) );

      
      
};


console.log(findMissingAndRepeatedValues( [[1,3],[2,2]])); // [9,2]