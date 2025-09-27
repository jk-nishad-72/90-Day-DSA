
//*—Q 32. 867. Transpose Matrix

var transpose = function(matrix) {

     let ans = Array.from({length:matrix[0].length},()=>Array(matrix.length))
     for(let i = 0;i<ans.length;i++){
             for(let j = 0 ;j<ans[i].length;j++){
                 ans[i][j] = matrix[j][i]
             }
     }
     return ans  
};


//*—Q 33. 48. Rotate Image


var rotate = function(matrix) {
    for(let i = 0;i<matrix.length;i++){
        for(let j = i;j<matrix[i].length;j++){
               let temp = matrix[i][j]
               matrix[i][j]  = matrix[j][i]
               matrix[j][i] = temp
        }
    }
    for(let i = 0;i<matrix.length;i++){
          let k = 0;let j = matrix[i].length-1
           while(k<j){
             let temp = matrix[i][k]
             matrix[i][k] = matrix[i][j]
             matrix[i][j] = temp 
             k++
             j--
}    } 
};