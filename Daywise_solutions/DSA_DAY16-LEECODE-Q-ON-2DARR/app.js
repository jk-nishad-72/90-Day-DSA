//* take input form usr


let prompt = require('prompt-sync')()

let size = Number(prompt('Enter array size : '))

let arr =  new Array(size)

for(let i = 0;i<size;i++){
    let innerSize = Number(prompt('Enter inner array size : '))

     arr[i] = new Array(innerSize);
    for(let j =0;j<innerSize;j++){

        arr[i][j] = Number(prompt('Enter inner array elements  : '))
         
    }
}

console.log(arr);




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

console.log(transpose(arr));


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

console.log(rotate(arr));





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
        for(let i = maxc;i>=minc;i--){
            ans.push(matrix[maxr][i])
        }
        maxr--
        for(let i = maxr;i>=minr;i--){
            ans.push(matrix[i][minc])
        }
        minc++
    }

 return ans 
    
};