
var transpose = function(matrix) {
    
    for(let i = 0;i<matrix.length;i++){
        
        for(let j = i ; j<matrix[0].length;j++){

              if(i != j ){
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
              }
             
        }
    }
    
    return matrix 
};


console.log(transpose([[1,2,3],[4,5,6],[7,8,9]])); 
