
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var swap = function(arr, i , j){
     let temp = arr[i][j];
     arr[i][j] = arr[j][i]
     arr[j][i] = temp;
   
     
}
var rotate = function(matrix) {

  for(let i = 0;i<matrix.length;i++){
     for(let j = i ;j<matrix[i].length;j++){
          
           if(i != j ) swap(matrix , i , j)
     }
  }  
 
  console.log(matrix);
  
  for(let k = 0;k<matrix.length;k++){

    let i = 0 , j = matrix[k].length-1;

    while(i <= j){
         let temp = matrix[k][i]
         matrix[k][i] = matrix[k][j]
         matrix[k][j] = temp
         i++
         j--
    }
  }
  console.log(matrix);
  

  return matrix
};


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0, bottom = matrix.length-1
    let left = 0, right = matrix[0].length-1

    let ans = []
    while(top <= bottom && left <= right){

         //* left to right 

         for(let i = left; i<= right ;i++){
            ans.push(matrix[top][i])
         }
         top++
         //* top to bottom  

         for(let k = top; k<= bottom ;k++){
            ans.push(matrix[k][right])
         }
         right--

//*  right  to left 

         
         if(top <= bottom){
            for(let j = right; j>= left ;j--){
            ans.push(matrix[bottom][j])
         }
         bottom--
         }
         //*  b  to top 

         
         if(left <= right){
            for(let l = bottom; l>= top ;l--){
            ans.push(matrix[l][left])
         }
         left++
         }


    }

    return ans
};