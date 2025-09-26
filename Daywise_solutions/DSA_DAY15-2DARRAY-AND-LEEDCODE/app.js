


let  mat = [ [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]

//* —Q 31. 1572. Matrix Diagonal Sum

function diagonalSum(mat) {
    // Write your logic here
    
    
    let lerfsum =0;let rightsum=0;
    for(let i = 0;i<mat.length;i++){
        
        for(let j = 0;j<mat[i].length;j++){
            
            
            if(i==j){
                
                lerfsum += mat[i][j];
            }
            
            if(i==j&&i+j==mat.length-1){
                continue;
            }
            
            if(i+j==mat.length-1){
                
                rightsum += mat[i][j];
            }
        }
        
    }
    
    return rightsum+lerfsum
    
}

console.log(diagonalSum(mat));
