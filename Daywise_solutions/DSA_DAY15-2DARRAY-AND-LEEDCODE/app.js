//*—Multi D-Array

let prompt = require('prompt-sync')();

function ArrayInput(){
    let OuterASize = Number(prompt('Enter a Big Array size : '))

let OuterArr = new Array(OuterASize)

for(let i = 0;i<OuterArr.length;i++){

     let innerAsize = Number(prompt("Enter innerArray size "))
    OuterArr[i] = new Array(innerAsize)

    for(let j = 0;j<OuterArr[i].length;j++){
         
         OuterArr[i][j] = Number(prompt('Enter elements : '))
    }

}
 return (OuterArr)
}

ArrayInput()
// let  mat = [ [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]

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

console.log(diagonalSum(OuterArr));



let NewArr = Array.from({length:3}).fill(0)
console.log(NewArr)
