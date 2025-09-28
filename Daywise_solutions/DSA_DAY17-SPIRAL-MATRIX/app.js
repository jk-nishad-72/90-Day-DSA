

//* spiral matrix 



var spiralOrder = function(matrix) {
    
 
    let minc = 0; let maxc = matrix[0].length-1;
    let minr =0;let maxr = matrix.length-1;
    let ans = []
    let m = matrix.length;let n = matrix[0].length

    while(ans.length<m*n){
        for(let i = minc;i<=maxc;i++){
            ans.push(matrix[minr][i])
        }
        minr++
        for(let i = minr;i<=maxr;i++){
            ans.push(matrix[i][maxc])
        }
        maxc--

          if(minr<=maxr){
             for(let i = maxc;i>=minc;i--){
            ans.push(matrix[maxr][i])
            }
          maxr--
          }
      
      if(minc<=maxc){

        for(let i = maxr;i>=minr;i--){
            ans.push(matrix[i][minc])
        }
        minc++
      }
        
    }

 return ans
};